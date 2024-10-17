import { OCApi } from "../../api-types";

export const postInteractionOne: OCApi.Schemas.Interaction & {
  heading: string;
} = {
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
      contentLabel: "Favorite candy",
      contentName: "favoriteCandy",
      contentType: "freeTextInput",
      maxLength: 50,
      required: true,
      options: [],
    },
    {
      contentLabel: "Sex Assigned at Birth",
      contentName: "gender",
      contentType: "selectInput",
      required: true,
      options: [
        {
          optionLabel: "Female",
          optionValue: "female",
        },
        {
          optionLabel: "Male",
          optionValue: "male",
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

export const postInteractionTwo: OCApi.Schemas.Interaction & {
  heading: string;
} = {
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
      contentLabel: "Legal First Name",
      contentName: "firstName",
      contentType: "freeTextInput",
      maxLength: 50,
      required: true,
      options: [],
    },
    {
      contentLabel: "Legal Middle Name",
      contentName: "middleName",
      contentType: "freeTextInput",
      maxLength: 50,
      required: true,
      options: [],
    },
    {
      contentLabel: "Legal Last Name",
      contentName: "lastName",
      contentType: "freeTextInput",
      maxLength: 50,
      required: true,
      options: [],
    },
    {
      contentLabel: "Sex Assigned at Birth",
      contentName: "gender",
      contentType: "selectInput",
      required: true,
      options: [
        {
          optionLabel: "Female",
          optionValue: "female",
        },
        {
          optionLabel: "Male",
          optionValue: "male",
        },
      ],
    },
    {
      contentLabel: "Birth Date (MM/DD/YYYY)",
      contentName: "birthDate",
      contentType: "dateInput",
      required: true,
      options: [],
    },
    {
      contentLabel: "Address Line 1",
      contentName: "addressAttributesAddress1",
      contentType: "freeTextInput",
      maxLength: 95,
      required: true,
      options: [],
    },
    {
      contentLabel: "Address Line 2",
      contentName: "addressAttributesAddress2",
      contentType: "freeTextInput",
      maxLength: 50,
      required: true,
      options: [],
    },
    {
      contentLabel: "City",
      contentName: "addressAttributesCity",
      contentType: "freeTextInput",
      maxLength: 50,
      required: true,
      options: [],
    },
    {
      contentLabel: "State",
      contentName: "addressAttributesState",
      contentType: "selectInput",
      required: true,
      options: [
        { optionLabel: "Alaska", optionValue: "AK" },
        { optionLabel: "Alabama", optionValue: "AL" },
        { optionLabel: "Arkansas", optionValue: "AR" },
        { optionLabel: "Arizona", optionValue: "AZ" },
        { optionLabel: "California", optionValue: "CA" },
        { optionLabel: "Colorado", optionValue: "CO" },
        { optionLabel: "Connecticut", optionValue: "CT" },
        { optionLabel: "District of Columbia", optionValue: "DC" },
        { optionLabel: "Delaware", optionValue: "DE" },
        { optionLabel: "Florida", optionValue: "FL" },
        { optionLabel: "Georgia", optionValue: "GA" },
        { optionLabel: "Hawaii", optionValue: "HI" },
        { optionLabel: "Iowa", optionValue: "IA" },
        { optionLabel: "Idaho", optionValue: "ID" },
        { optionLabel: "Illinois", optionValue: "IL" },
        { optionLabel: "Indiana", optionValue: "IN" },
        { optionLabel: "Kansas", optionValue: "KS" },
        { optionLabel: "Kentucky", optionValue: "KY" },
        { optionLabel: "Louisiana", optionValue: "LA" },
        { optionLabel: "Massachusetts", optionValue: "MA" },
        { optionLabel: "Maryland", optionValue: "MD" },
        { optionLabel: "Maine", optionValue: "ME" },
        { optionLabel: "Michigan", optionValue: "MI" },
        { optionLabel: "Minnesota", optionValue: "MN" },
        { optionLabel: "Missouri", optionValue: "MO" },
        { optionLabel: "Mississippi", optionValue: "MS" },
        { optionLabel: "Montana", optionValue: "MT" },
        { optionLabel: "North Carolina", optionValue: "NC" },
        { optionLabel: "North Dakota", optionValue: "ND" },
        { optionLabel: "Nebraska", optionValue: "NE" },
        { optionLabel: "New Hampshire", optionValue: "NH" },
        { optionLabel: "New Jersey", optionValue: "NJ" },
        { optionLabel: "New Mexico", optionValue: "NM" },
        { optionLabel: "Nevada", optionValue: "NV" },
        { optionLabel: "New York", optionValue: "NY" },
        { optionLabel: "Ohio", optionValue: "OH" },
        { optionLabel: "Oklahoma", optionValue: "OK" },
        { optionLabel: "Oregon", optionValue: "OR" },
        { optionLabel: "Pennsylvania", optionValue: "PA" },
        { optionLabel: "Rhode Island", optionValue: "RI" },
        { optionLabel: "South Carolina", optionValue: "SC" },
        { optionLabel: "South Dakota", optionValue: "SD" },
        { optionLabel: "Tennessee", optionValue: "TN" },
        { optionLabel: "Texas", optionValue: "TX" },
        { optionLabel: "Utah", optionValue: "UT" },
        { optionLabel: "Virginia", optionValue: "VA" },
        { optionLabel: "Vermont", optionValue: "VT" },
        { optionLabel: "Washington", optionValue: "WA" },
        { optionLabel: "Wisconsin", optionValue: "WI" },
        { optionLabel: "West Virginia", optionValue: "WV" },
        { optionLabel: "Wyoming", optionValue: "WY" },
      ],
    },
    {
      contentLabel: "ZIP Code",
      contentName: "addressAttributesZip",
      contentType: "freeTextInput",
      maxLength: 10,
      required: true,
      options: [],
    },
    {
      contentLabel: "Phone",
      contentName: "phone",
      contentType: "freeTextInput",
      maxLength: 16,
      required: true,
      options: [],
    },
    {
      contentLabel: "Email address",
      contentName: "email",
      contentType: "freeTextInput",
      maxLength: 254,
      required: true,
      options: [],
    },
    {
      contentLabel: "Password",
      contentName: "password",
      contentType: "freeTextInput",
      maxLength: 72,
      required: true,
      options: [],
    },
    {
      contentLabel: "Password Confirmation",
      contentName: "passwordConfirmation",
      contentType: "freeTextInput",
      maxLength: 72,
      required: true,
      options: [],
    },
    {
      contentLabel:
        'I agree to the <a id="terms_of_service_link" href="/terms_of_service">Terms of Service</a> and <a id="privacy_policy_link" href="/privacy">Privacy Policy</a>.',
      contentName: "legalAgreement",
      contentType: "yesNoInput",
      options: [],
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
