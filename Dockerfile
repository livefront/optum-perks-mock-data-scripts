FROM node:18-alpine

# Install necessary system packages
RUN apk --no-cache add \
    python3 \
    make \
    g++ \
    curl \
    tzdata

# Create entrypoint script before switching users
RUN echo '#!/bin/sh' > /usr/local/bin/docker-entrypoint.sh && \
    echo 'npm run pipeline' >> /usr/local/bin/docker-entrypoint.sh && \
    echo 'exec mockoon-cli start -d ./src/mockoon_env.final.json -p ${PORT:-3005}; sleep infinity & wait' >> /usr/local/bin/docker-entrypoint.sh && \
    chmod +x /usr/local/bin/docker-entrypoint.sh

# Create non-root user
RUN adduser --shell /bin/sh --disabled-password --gecos "" mockoon

# Create app directory and set ownership
WORKDIR /usr/src/app
RUN chown mockoon:mockoon /usr/src/app

# Copy package files with correct ownership
COPY --chown=mockoon:mockoon package*.json ./

# Install dependencies
RUN npm install

# Install specific version of mockoon-cli globally
RUN npm install -g @mockoon/cli@9.0.0

# Copy application files with correct ownership
COPY --chown=mockoon:mockoon tsconfig.json ./
COPY --chown=mockoon:mockoon scripts/ ./scripts/
COPY --chown=mockoon:mockoon src/ ./src/
COPY --chown=mockoon:mockoon config/ ./config/

# Switch to non-root user
USER mockoon

# Run the pipeline to set up all necessary files
RUN npm run pipeline

# Expose the default port (can be overridden by PORT environment variable)
EXPOSE 3005

# Start the mock server using the entrypoint script
ENTRYPOINT ["/usr/local/bin/docker-entrypoint.sh"]