const categories = [
  {
    name: "Information Technology",
    id: "Information Technology",
    sessions: [
      {
        name: "C218 | UI/UX Design for Apps",
        id: "C218 | UI/UX Design for Apps",
        desc: "See the latest in metal 3D printing technologies, from desktop machines (you need a really big desk!) to those designed for machine shops creating high-end and high-volume pieces.",
      },
      {
        name: "C346 | Mobile App Development",
        id: "C346 | Mobile App Development",
        desc: "A new house in 24 hours—can this be our practical solution for making affordable housing for all? See what has been done in this very vertical industry, and discuss how it will grow and be truly affordable—both for those living in the homes, and for the builders that create them.",
      },
    ],
  },
  {
    name: "Financial Technology",
    id: "Financial Technology",
    sessions: [
      {
        name: "C237 | Software Application Development",
        id: "C237 | Software Application Development",
        desc: "Eliminating human error and saving time and money are key reasons user testing—at least parts of it—is an ideal job for automation. We'll discuss the advantages and disadvantages of using machines to test a product that will be used by humans.",
      },
      {
        name: "C372 | Payment Technologies",
        id: "C372 | Payment Technologies",
        desc: "With security crises gaining in prevalence, it's more important than ever for us to make sure that our AI can't be hacked. How can we avoid all the data noise out there?",
      },
    ],
  },
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
