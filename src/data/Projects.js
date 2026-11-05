const projects = [
  {
    id: "obstacle-detection",

    title: "AI-Based Obstacle Detection and Monitoring Dashboard",

    category: "AI & Embedded Systems",

    shortDescription:
      "Real-time object detection and proximity alert system using YOLO and ultrasonic distance sensing.",

    overview:
      "This project combines computer vision and embedded systems to detect and monitor obstacles in real time. A camera captures the surroundings and YOLO is used for object detection and classification. An ESP32 connected to an ultrasonic sensor measures the distance of nearby obstacles. A React-based dashboard displays the camera feed, detected objects, confidence scores and proximity alerts.",

    problem:
      "Conventional obstacle detection systems may provide only distance information without identifying the surrounding objects. This project combines object detection and distance sensing to provide more informative real-time monitoring.",

    objectives: [
      "Detect and classify objects using YOLO.",
      "Measure obstacle distance using an ultrasonic sensor.",
      "Generate warning and danger alerts based on distance.",
      "Display camera and sensor information through a web dashboard."
    ],

    workflow: [
      "The camera captures the surrounding environment.",
      "OpenCV processes the incoming video frames.",
      "YOLO detects and classifies objects in the frames.",
      "ESP32 measures obstacle distance using an ultrasonic sensor.",
      "The Flask backend processes the monitoring information.",
      "The React dashboard displays objects, confidence values, distance and alerts."
    ],

    features: [
      "Real-time object detection",
      "Object classification",
      "Confidence score display",
      "Ultrasonic distance monitoring",
      "Warning and danger proximity alerts",
      "Live camera monitoring",
      "Web-based monitoring dashboard"
    ],

    technologies: [
      "React.js",
      "Python",
      "Flask",
      "YOLO11",
      "OpenCV",
      "ESP32",
      "Ultrasonic Sensor"
    ],

    images: [
      "/figure/detection01.jpeg"
    ],

    github: "https://github.com/AbhithaFrancis/AI-BASED-OBJECT-DETECTION-DISTANCE-ESTIMATION-AND-INTELLIGENT-PROXIMITY-ALERT-SYSTEM"
  },

  {
    id: "agricultural-rover",

    title: "Smart Agricultural Rover Simulation",

    category: "Robotics & ROS",

    shortDescription:
      "ROS-based agricultural rover simulation featuring waypoint navigation and soil-condition-based seed selection.",

    overview:
      "This project presents a simulated smart agricultural rover developed using ROS and Gazebo. The simulation demonstrates autonomous waypoint navigation, soil-condition-based seed selection, seed dispensing logic and operational monitoring through a React dashboard.",

    problem:
      "Agricultural operations can require considerable manual effort. This simulation explores how robotics and automation can be used to demonstrate controlled agricultural operations.",

    objectives: [
      "Develop a simulated agricultural rover.",
      "Demonstrate waypoint-based autonomous navigation.",
      "Implement soil-condition-based seed selection.",
      "Demonstrate seed dispensing logic.",
      "Monitor rover operation through a web dashboard."
    ],

    workflow: [
      "The rover starts from the defined starting position.",
      "The rover follows predefined waypoints in the simulated environment.",
      "Different regions represent different soil conditions.",
      "The appropriate seed type is selected according to the simulated soil condition.",
      "Seed dispensing is represented through the simulation logic.",
      "Rover status and seed information are displayed on the dashboard."
    ],

    features: [
      "ROS 2 rover simulation",
      "Gazebo simulation environment",
      "Waypoint navigation",
      "Soil-condition-based seed selection",
      "Seed stock monitoring",
      "Operational status monitoring",
      "React dashboard"
    ],

    technologies: [
      "ROS 2",
      "Gazebo",
      "Python",
      "React.js",
      "JavaScript"
    ],

    images: [
      "/figure/simulation.png",
      "/figure/agri-dashboard.png"
    ],

    github: "https://github.com/AbhithaFrancis/seed_sowing_rover"
  },

  {
    id: "water-level",

    title: "Water Level Detection and Automation in Tank",

    category: "Embedded Systems",

    shortDescription:
      "An automated water level monitoring system designed to control a water pump according to the tank level.",

    overview:
      "This project focuses on monitoring the water level in a storage tank and automating pump operation. Sensor readings are used to determine the water level and control the pump accordingly.",

    problem:
      "Manual monitoring of water tanks can lead to overflow, water wastage and unnecessary pump operation.",

    objectives: [
      "Monitor the water level in a tank.",
      "Automate water pump operation.",
      "Prevent tank overflow.",
      "Reduce manual monitoring."
    ],

    workflow: [
      "The sensor monitors the water level.",
      "The controller receives the sensor information.",
      "The water level is compared with predefined conditions.",
      "The pump is switched ON or OFF according to the detected level."
    ],

    features: [
      "Water level monitoring",
      "Automatic pump control",
      "Overflow prevention",
      "Reduced manual intervention"
    ],

    technologies: [
      "Embedded Systems",
      "Microcontroller",
      "Water Level Sensor",
      "Motor Control"
    ],

    images: [
      "/figure/watermonitoring.jpeg"
    ],

    github: ""
  },

  {
    id: "disaster-rover",

    title: "Disaster Response and Monitoring Rover",

    category: "Robotics",

    shortDescription:
      "A rover concept for remote surveillance and environmental monitoring in disaster-affected areas.",

    overview:
      "This project explores a robotic rover concept for remote observation and environmental monitoring in disaster-affected environments. The system focuses on combining a mobile platform with sensing and camera-based monitoring capabilities.",

    problem:
      "Disaster-affected environments can be difficult and potentially unsafe for humans to access during initial inspection.",

    objectives: [
      "Explore remote environmental monitoring.",
      "Support remote observation of surroundings.",
      "Integrate sensors with a mobile robotic platform.",
      "Explore wireless monitoring concepts."
    ],

    workflow: [
      "The rover moves through the target environment.",
      "Sensors collect environmental information.",
      "A camera provides visual observation.",
      "The collected information can be transmitted for remote monitoring."
    ],

    features: [
      "Remote monitoring concept",
      "Sensor integration",
      "Camera-based observation",
      "Mobile robotic platform",
      "Wireless monitoring concept"
    ],

    technologies: [
      "Embedded Systems",
      "Sensors",
      "Camera Module",
      "Wireless Communication"
    ],

    images: [
      "/figure/rover00.jpeg",
      "/figure/human detection.png",
      "/figure/telegram.jpeg",
    ],

    github: "https://github.com/AbhithaFrancis/Smart-Response-And-Monitoring-Rover"
  }
];

export default projects;