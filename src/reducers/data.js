const initialState = {
  Folders: {
    Root: {
      name: "Root",
      // Add files and folders present in the root folder
      content: [
        "presentation_name",
        "competences_name",
        "cv_name",
        "diplomas_name",
        "experiences_name",
      ],
    },
    experiences_name: {
      name: "experiences_name",
      // Add the files present in the folder
      content: [
        "otd_name",
        "p3fc_name",
        "gradient_name",
        "dnd_name",
        "canvas_name",
        "lorenzo_name",
        "canal_name",
        "kidiparc_name",
      ],
    },
  },
  // List all the files available (don't forget to add them in wording too)
  presentation_name: {
    name: "presentation_name",
    text: "presentation_text",
  },
  diplomas_name: {
    name: "diplomas_name",
    text: "diplomas_text",
  },
  competences_name: {
    name: "competences_name",
    text: "competences_text",
  },
  p3fc_name: {
    name: "p3fc_name",
    text: "p3fc_text",
  },
  otd_name: {
    name: "otd_name",
    text: "otd_text",
  },
  gradient_name: {
    name: "gradient_name",
    text: "gradient_text",
  },
  dnd_name: {
    name: "dnd_name",
    text: "dnd_text",
  },
  canvas_name: {
    name: "canvas_name",
    text: "canvas_text",
  },
  lorenzo_name: {
    name: "lorenzo_name",
    text: "lorenzo_text",
  },
  canal_name: {
    name: "canal_name",
    text: "canal_text",
  },
  kidiparc_name: {
    name: "kidiparc_name",
    text: "kidiparc_text",
  },
  cv_name: {
    name: "cv_name",
    text: null,
  },
};

const data = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default data;
