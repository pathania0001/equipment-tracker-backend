module.exports = {
  courts: [
    {
      name: "Indoor Court 1",
      type: "indoor",
      basePrice: 400
    },
    {
      name: "Indoor Court 2",
      type: "indoor",
      basePrice: 450
    },
    {
      name: "Outdoor Court 1",
      type: "outdoor",
      basePrice: 350
    },
    {
      name: "Outdoor Court 2",
      type: "outdoor",
      basePrice: 300
    },
  ],

  coaches: [
    {
      name: "Rajat",
      basePrice: 300,
      level: "junior"
    },
    {
      name: "Anoop",
      basePrice: 350,
      level: "intermediate"
    },
    {
      name: "Vineet",
      basePrice: 400,
      level: "intermediate"
    },
    {
      name: "Kritik",
      basePrice: 450,
      level: "senior"
    },
    {
      name: "Bhawesh",
      basePrice: 500,
      level: "senior"
    }
  ],

  equipment: [
    {
      name: "Racket",
      rentalRate: 50,
      quantityAvailable: 10
    },
    {
      name: "Shuttle",
      rentalRate: 100,
      quantityAvailable: 5
    }
  ]
};
