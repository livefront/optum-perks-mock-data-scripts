import { OCApi } from "../../api-types";

export const getInteraction: OCApi.Schemas.Interaction & { heading: string } = {
  heading: "Thanks, just a few more things!",
  title: "Thanks, just a few more things!",
  progressBar: {
    accountSetup: {
      index: 1,
      name: "Account Setup",
    },
    eligibility: {
      index: 2,
      name: "Eligibility",
    },
    doctorReview: {
      index: 4,
      name: "Provider Review",
    },
    interview: {
      index: 3,
      name: "Interview",
    },
    payment: {
      index: 5,
      name: "Payment",
    },
    personalInformation: {
      index: 6,
      name: "Personal Information",
    },
  },
  content: [
    {
      contentLabel: "List your current prescriptions",
      contentName: "currentPrescriptions",
      contentType: "freeTextInput",
      maxLength: 50,
      required: true,
      options: [],
    },
    {
      contentLabel: "Upload an image",
      contentName: "imageOfCondition",
      contentType: "imageUpload",
      maxCount: 3,
      required: true,
      options: [],
    },
    {
      contentLabel: "Are you allergic to anything?",
      contentName: "allergies",
      contentType: "selectInput",
      required: true,
      options: [
        {
          optionLabel: "No",
          optionValue: "no",
        },
        {
          optionLabel: "Yes",
          optionValue: "yes",
        },
      ],
    },
  ],

  progress: {
    current: { percentage: 0.5 },
  },
  actions: {
    continue: {
      actionLabel: "Continue",
    },
    goBack: {
      actionLabel: "Back",
    },
  },
};
