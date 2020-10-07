export default {
  palette: {
    primary: {
      light: "#ffbd45",
      main: "#fb8c00",
      dark: "#c25e00",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff844c",
      main: "#f4511e",
      dark: "#b91400",
      contrastText: "#fff",
    },
  },
  spreadThis: {
    typography: {
      useNextVariants: true,
    },
    form: {
      textAlign: "center",
    },
    icon: {
      width: "70px",
      margin: "20px auto 20px auto",
    },
    pageTitle: {
      margin: "10px auto 10px auto",
    },
    textField: {
      margin: "10px auto 10px auto",
    },
    button: {
      marginTop: 20,
      position: "relative",
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
    },
    progress: {
      position: "absolute",
    },
    invisibleSeparator: {
      border: "none",
      margin: 4,
    },
    visibleSeparator: {
      width: "100%",
      borderBottom: "1px solid rgba(0,0,0,0.1)",
      marginBottom: 20,
    },
  },
  paper: {
    padding: 20,
  },
  profile: {
    "& .image-wrapper": {
      textAlign: "center",
      position: "relative",
      "& button": {
        position: "absolute",
        top: "80%",
        left: "70%",
      },
    },
    "& .profile-image": {
      width: 200,
      height: 200,
      objectFit: "cover",
      maxWidth: "100%",
      borderRadius: "50%",
    },
    "& .profile-details": {
      textAlign: "center",
      "& span, svg": {
        verticalAlign: "middle",
      },
      "& a": {
        color: "#fb8c00",
      },
    },
    "& hr": {
      border: "none",
      margin: "0 0 10px 0",
    },
    "& svg.button": {
      "&:hover": {
        cursor: "pointer",
      },
    },
  },
  buttons: {
    textAlign: "center",
    "& a": {
      margin: "20px 10px",
    },
  },
};
