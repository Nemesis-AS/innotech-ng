import { Component } from '@angular/core';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-home-statements',
  imports: [DialogModule],
  templateUrl: './home-statements.html',
  styleUrl: './home-statements.css',
})
export class HomeStatements {
  categories = [
    {
      title: 'Smart Solutions, Smarter Society',
      description: 'E-projects focused on web, APIs, mobile apps, and AI tools for societal needs.',
      icon: '🌐',
      expanded: false,
      showRubrics: false,
      points: [
        'Web services and Applications',
        'APIs, Utilities and Cyber Security Solutions',
        'Mobile Applications',
        'E-support and Chat-bots',
        'AI Solutions',
      ],
      rubrics: [
        {
          title: 'Project Showcasing',
          marks: 10,
          subpoints: ['Team Presentation Skills (5)', 'Project Understanding (5)'],
        },
        {
          title: 'Innovation & Novelty',
          marks: 10,
          subpoints: ['Originality of Project (5)', 'Employed Technology & AI Tools (5)'],
        },
        {
          title: 'Relevance & Application',
          marks: 10,
          subpoints: ['Significance for Society (5)', 'Practical Application (5)'],
        },
        {
          title: 'Usability & Scalability',
          marks: 10,
          subpoints: ['Ease of Use (5)', 'Potential to Scale (5)'],
        },
        { title: 'Query Addressing', marks: 10, subpoints: [] },
      ],
    },
    {
      title: 'AI Solutions for Automation',
      description: 'AI, Generative AI, and intelligent automation solutions.',
      icon: '🤖',
      expanded: false,
      showRubrics: false,
      points: [
        'AI Solutions',
        'Agentic AI and Automation',
        'Generative AI',
        'AI supported solutions',
        'Bioinformatics and Healthcare',
        'NLP and Computer Vision',
      ],
      rubrics: [
        {
          title: 'Project Showcasing',
          marks: 10,
          subpoints: ['Team Presentation Skills (5)', 'Project Understanding (5)'],
        },
        {
          title: 'Innovation & Novelty',
          marks: 10,
          subpoints: ['Originality of Project (5)', 'Employed Technology & AI Tools (5)'],
        },
        {
          title: 'Relevance & Application',
          marks: 10,
          subpoints: ['Significance for Society (5)', 'Practical Application (5)'],
        },
        {
          title: 'Usability & Scalability',
          marks: 10,
          subpoints: ['Ease of Use (5)', 'Potential to Scale (5)'],
        },
        { title: 'Query Addressing', marks: 10, subpoints: [] },
      ],
    },
    {
      title: 'Automation and Robotics',
      description: 'IoT, sensor-based, and robotic solutions for real-world challenges.',
      icon: '🔧',
      expanded: false,
      showRubrics: false,
      points: [
        'IoT based applications',
        'Robo-solutions',
        'IR and Sensor-based applications',
        'Manufacturing and AI Solutions',
        'Image Processing and Automation',
      ],
      rubrics: [
        {
          title: 'Design & Build Quality',
          marks: 10,
          subpoints: ['Neatness & Safety (5)', 'Robustness of Hardware (5)'],
        },
        {
          title: 'Working Model',
          marks: 10,
          subpoints: ['Originality of Approach (5)', 'Novel Hardware Integration (5)'],
        },
        {
          title: 'Technology & AI Integration',
          marks: 10,
          subpoints: ['Sensors/IoT Usage (5)', 'AI/Automation Potential (5)'],
        },
        {
          title: 'Future Scope & Impact',
          marks: 10,
          subpoints: ['Scalability (5)', 'Societal Relevance (5)'],
        },
        { title: 'Query Addressing', marks: 10, subpoints: [] },
      ],
    },
    {
      title: 'From Concept to Reality',
      description: 'Drone, EV, space, medical devices, and green energy projects.',
      icon: '🚀',
      expanded: false,
      showRubrics: false,
      points: [
        'Drone Solutions',
        'Space Technology Solutions',
        'EV Solutions',
        'Medical Devices',
        'Green Energy',
      ],
      rubrics: [
        {
          title: 'Design & Build Quality',
          marks: 10,
          subpoints: ['Neatness & Safety (5)', 'Robustness of Hardware (5)'],
        },
        {
          title: 'Working Model',
          marks: 10,
          subpoints: ['Originality of Approach (5)', 'Novel Hardware Integration (5)'],
        },
        {
          title: 'Technology & AI Integration',
          marks: 10,
          subpoints: ['Sensors/IoT Usage (5)', 'AI/Automation Potential (5)'],
        },
        {
          title: 'Future Scope & Impact',
          marks: 10,
          subpoints: ['Scalability (5)', 'Societal Relevance (5)'],
        },
        { title: 'Query Addressing', marks: 10, subpoints: [] },
      ],
    },
    {
      title: 'Start Small, Scale Big, Sustain Always',
      description: 'Start-up ideas, business models, and revenue generation solutions.',
      icon: '💼',
      expanded: false,
      showRubrics: false,
      points: [
        'Start-up ideas',
        'Marketing Solutions',
        'Productivity and Production based ideas',
        'Revenue generation solutions',
        'Solutions for Economy Boost-up',
        'Registered firm or MSME Services',
      ],
      rubrics: [
        {
          title: 'Uniqueness of Idea',
          marks: 10,
          subpoints: ['Novelty (5)', 'Differentiation (5)'],
        },
        {
          title: 'Market Feasibility',
          marks: 10,
          subpoints: ['Business Model Strength (5)', 'Target Audience Fit (5)'],
        },
        {
          title: 'Revenue & Sustainability',
          marks: 10,
          subpoints: ['Profit Potential (5)', 'Long-Term Sustainability (5)'],
        },
        {
          title: 'Societal / Economic Relevance',
          marks: 10,
          subpoints: ['Societal Impact (5)', 'Economic Contribution (5)'],
        },
        { title: 'Query Addressing', marks: 10, subpoints: [] },
      ],
    },
    {
      title: 'GenZ Budding Engineers',
      description: 'Innovative prototypes and solutions from first-year students.',
      icon: '👩‍🎓',
      expanded: false,
      showRubrics: false,
      points: ['Prototypes and solutions from First-year students only'],
      rubrics: [
        {
          title: 'Concept Innovation',
          marks: 10,
          subpoints: ['Originality (5)', 'Creativity (5)'],
        },
        {
          title: 'Impact Value',
          marks: 10,
          subpoints: ['Relevance to SDGs (5)', 'Potential to Inspire (5)'],
        },
        {
          title: 'Message Clarity',
          marks: 10,
          subpoints: ['Easy to Understand (5)', 'Logical Flow (5)'],
        },
        { title: 'Visual Design', marks: 10, subpoints: ['Neatness (5)', 'Artistic Appeal (5)'] },
        { title: 'Query Addressing', marks: 10, subpoints: [] },
      ],
    },
    {
      title: 'Creative Visions for a Sustainable Future',
      description: 'Posters, models, and designs for social and environmental impact.',
      icon: '🌱',
      expanded: false,
      showRubrics: false,
      points: [
        'Ideas for civic sense and ethics',
        'Infrastructural Designs',
        'Society & Environmental Solutions',
        'Idea submissions without software/hardware support',
      ],
      rubrics: [
        {
          title: 'Concept Innovation',
          marks: 10,
          subpoints: ['Originality (5)', 'Creativity (5)'],
        },
        {
          title: 'Impact Value',
          marks: 10,
          subpoints: ['Relevance (5)', 'Potential to Inspire (5)'],
        },
        {
          title: 'Message Clarity',
          marks: 10,
          subpoints: ['Easy to Understand (5)', 'Logical Flow (5)'],
        },
        { title: 'Visual Design', marks: 10, subpoints: ['Neatness (5)', 'Artistic Appeal (5)'] },
        { title: 'Query Addressing', marks: 10, subpoints: [] },
      ],
    },
  ];

  visible: boolean = false;
  selectedIdx: number = 0;

  showDialog(statementIdx: number) {
    this.visible = true;
    this.selectedIdx = statementIdx;
  }
}
