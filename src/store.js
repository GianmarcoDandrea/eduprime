import { reactive } from "vue";

export const store = reactive({
  eduPrimeDescription:
    "EduPrime is the most versitile WordPress theme for educational purpose, showcasing universities, courses, secondary schools, etc.",

  facultyList: [
    {
      name: "Law Faculty",
      image: "Gavel-v2.png",
      secondImage: "Gavel-Illustration-e1556884768193.png",
      details:
        "Learning from world-leadin academics and pratictioners, you'll not only receive an outstanding grounding in the theory of law, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
    },
    {
      name: "Economy",
      image: "Coins-tabs-v2.png",
      secondImage: "Economy.png",
      details:
        "Learning from world-leadin academics and pratictioners, you'll not only receive an outstanding grounding in the theory of economy, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
    },
    {
      name: "Medicine",
      image: "Medicine-tabs-v2.png",
      secondImage: "Medicine.png",
      details:
        "Learning from world-leadin academics and pratictioners, you'll not only receive an outstanding grounding in the theory of medicine, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
    },
    {
      name: "Computer Science",
      image: "Computer-tabs-v2.png",
      secondImage: "Computer-Science.png",
      details:
        "Learning from world-leadin academics and pratictioners, you'll not only receive an outstanding grounding in the theory of computer science, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
    },
    {
      name: "Graphic Design",
      image: "Palette-tabs-v2.png",
      secondImage: "Graphic-Design.png",
      details:
        "Learning from world-leadin academics and pratictioners, you'll not only receive an outstanding grounding in the theory of graphic design, but you will be able to understand how those principles are applied in practice through a range of student-led activities and competitions.",
    },
  ],

  categoriesList: [
    "economy",
    "design",
    "coaching",
    "business",
    "medicine",
    "law",
    "fitness",
  ],

  facultyActive: [],
});
