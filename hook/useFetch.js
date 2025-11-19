import { useState, useEffect } from "react";

// Custom hook to provide meditation data
const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Placeholder meditation data
  const meditationData = [
    {
      id: 1,
      title: "Morning Mindfulness",
      description: "Start your day with peaceful meditation",
      duration: "10 minutes",
      category: "Calmness",
      image: require("../assets/icon.png"),
      target: "Reduce stress and increase focus",
      instructions: [
        "Find a quiet, comfortable space",
        "Sit with your back straight",
        "Close your eyes gently",
        "Focus on your breath",
        "Let thoughts pass without judgment",
      ],
    },
    {
      id: 2,
      title: "Deep Breathing",
      description: "Calm your mind with breathing exercises",
      duration: "15 minutes",
      category: "Relaxation",
      image: require("../assets/icon.png"),
      target: "Lower anxiety and promote relaxation",
      instructions: [
        "Sit or lie down comfortably",
        "Breathe in slowly through your nose",
        "Hold for 4 seconds",
        "Exhale slowly through your mouth",
        "Repeat for the duration",
      ],
    },
    {
      id: 3,
      title: "Body Scan",
      description: "Release tension from head to toe",
      duration: "20 minutes",
      category: "Relaxation",
      image: require("../assets/icon.png"),
      target: "Release physical tension",
      instructions: [
        "Lie down in a comfortable position",
        "Start from the top of your head",
        "Slowly move attention down your body",
        "Notice any tension or discomfort",
        "Breathe into areas of tension",
      ],
    },
  ];

  const BestMeditations = [
    {
      id: 4,
      title: "Evening Calm",
      description: "Wind down before sleep",
      duration: "12 minutes",
      category: "Sleep",
      image: require("../assets/icon.png"),
    },
    {
      id: 5,
      title: "Gratitude Practice",
      description: "Cultivate thankfulness",
      duration: "8 minutes",
      category: "Mindfulness",
      image: require("../assets/icon.png"),
    },
  ];

  useEffect(() => {
    // Simulate data fetching
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        // For now, we're using placeholder data
        setTimeout(() => {
          setData([...meditationData, ...BestMeditations]);
          setIsLoading(false);
        }, 500);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Method to get a specific meditation item by ID
  const getItemById = (id) => {
    const allMeditations = [...meditationData, ...BestMeditations];
    return allMeditations.find((item) => item.id === id);
  };

  // Method to refetch data (for pull-to-refresh)
  const refetch = () => {
    setIsLoading(true);
    setTimeout(() => {
      setData([...meditationData, ...BestMeditations]);
      setIsLoading(false);
    }, 500);
  };

  return { 
    data, 
    isLoading, 
    error, 
    meditationData, 
    BestMeditations,
    getItemById,
    refetch,
  };
};

export default useFetch;
