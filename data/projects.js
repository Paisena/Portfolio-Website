export const projects = {
  astrojumper: {
    title: "Astrojumper",
    tagline: "2D pixel art space platformer/Astroid game!",
    image: "/AstrojumperWallpaper.jpg",
    overview: [
      "Astrojumper is a fast-paced hybrid shooter. Seamlessly jump between orbital fleet battles and ground assaults to reclaim human worlds from the Anunnaki and uncover their true purpose. \n\n This project was done with a small group of fellow undergraduates in an interdisciplinary environment.",
    ],
    technologies: ["Unity", "C#", "Github"],
    role: "Programmer & Game Designer",
    timeline: "7 Months",
    status: "Demo Released",

    features: [
  {
    heading: "Ground Combat System",
    paragraphs: [
      "The player fights against the Annunaki forces within this 2D platformer game with a wide variety of tools.",
    ],
    image: "/AJGndCmbt.png",
    imageWidth: 2560,
    imageHeight: 1440,


    imageOnRight: true,
  },
  {
    heading: "The Design Process",
    paragraphs: [
      "As the lead designing the combat system, I wanted the players to synchronize the game's movement system with the combat system while giving the player tools to handle every situation the design of the level gives them.",
      "We first gave the player only a basic blaster which fire singular bullets in bursts of three and a short ranged melee attack.",
      "When designing these attacks, we focused on having the players be able to navigate through the levels effectively while being able to use those attacks."
    ],
    image: "/Cmbt2.png",
    imageWidth: 2560,
    imageHeight: 1440,
    imageOnRight: false,
  },
  {
    heading: "Player Feedback and Gameplay Revision",
    paragraphs: [
      "After play tests and gameplay revamps the two basic attacks ran into issues.",
      "While the attacks was very effective on levels with horizontal platforming, the attacks were ineffective on more vertical levels.",
      "With the addition of new weapons, the player could now handle more level layouts that the level designers wanted to do. "
    ],
    image: "/AJWpn.png",
    imageWidth: 2560,
    imageHeight: 1440,
    imageOnRight: true,
  },
    ],
      imageWidth: 1232,
    imageHeight: 706,
      imageMaxWidth: 800,
      steamUrl: "https://store.steampowered.com/app/4713740/Astrojumper_Demo/"

  },
  "visual-novel-tool": {
    title: "Visual Novel Authoring Tool",
    tagline: "Unity based dialogue system",
    image: "",
    imageWidth: 548,
    imageHeight: 455,
    imageMaxWidth: 100,
    overview: [
      "This tool is designed for users to easily and freely implement dialogue into your Unity project.",
      "Users can create branching dialogue with multiple choice options through Unity's graph system and save that dialogue information as an easy to implement scriptable object.",
      "Used in other project Astrojumper!"
    ],
    technologies: ["Unity", "Unity-Editor", "C#"],
    role: "Sole Developer",
    timeline: "3 Weeks",
    status: "Shipped",

    features: [
  {
    heading: "Dialogue Creation",
    paragraphs: [
      "Users can create unique dialogue through the Unity editor's graph and node systems, allowing for a visual representation of the dialogue scene.",
    ],
    image: "/DialogueGraph.png",
    imageWidth: 1878,
    imageHeight: 741,
    imageOnRight: true,
  },
  {
    heading: "Dialogue Implementation",
    paragraphs: [
      "Users can insert a baseline Unity gameobject into their own project and have full control all of the dialogue boxes, name tags, character icons, and what they look like .",
    ],
    image: "/Dialogue.png",
    imageWidth: 2560,
    imageHeight: 1440,
    imageOnRight: false,
  },

    ],
    imageWidth: 1232,
    imageHeight: 100,


  },
  "sound-generator": {
        title: "Sound Generator Tool",
    tagline: "Tool which gives the user freedom to generate basic sound effects ",
    image: "/SoundLogo.png",
    imageWidth: 548,
    imageHeight: 455,
    imageMaxWidth: 400,

    overview: [
      "This sound generator tool is designed to generate basic sound effects based on a given set of parameters that the user can modify.",
      "Users can convert their sounds into mp4 files which they can use."
    ],
    technologies: ["Python", "Tkinter", "Sound Design"],
    role: "Sole Developer",
    timeline: "2 Weeks",
    status: "Shipped",

    features: [
  {
    heading: "Sound Generation",
    paragraphs: [
      "The tool uses the basic sin wave to generate sounds for the user.",
      "Given the parameters that the user can set, tool modifies the sin wave to generate a sound.",
      "The user can export the sound with it's given parameters using this tool into an mp4 file."
    ],
    image: "/SoundMain.png",
    imageWidth: 1176,
    imageHeight: 1184,
    imageOnRight: true,
  },
  {
    heading: "Sound Parameters",
    paragraphs: [
      "The user is given a long list of parameters that they can choose from, allowing a large amount of variety of sounds while still being a very basic system",
      "Some options: Frequency, sound length, volume(amplitude), ADSR profile, frequency slide.",
      "Also has a 8-bit function!"
    ],
    image: "/SoundParams.png",
    imageWidth: 187,
    imageHeight: 1138,
    imageOnRight: false,
  },

    ],


  }
};
