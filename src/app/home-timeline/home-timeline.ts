import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-timeline',
  templateUrl: './home-timeline.html',
  styleUrl: './home-timeline.css',
})
export class HomeTimeline implements OnInit {
  visibleItems: number[] = [];
  isVisible: boolean[] = [];
  scrollProgress: number = 0;

  timelineEvents = [
    {
      date: 'October 1',
      title: 'Registrations Open',
      time: '9:00 AM',
      description: 'Registration for Innotech 25 opens. Participants can sign up for competitions, workshops, and events.',
      icon: '🚀',
      color: 'neon-cyan',
    },
    {
      date: 'October 20',
      title: 'Registrations Close',
      time: '11:59 PM',
      description: 'Final deadline to register. Ensure your team and event selections are submitted before midnight.',
      icon: '💻',
      color: 'neon-purple',
    },
    {
      date: 'November 7',
      title: 'Departmental Level',
      time: '10:00 AM',
      description: 'Projects would be evaluated at the departmental level',
      icon: '🤖',
      color: 'neon-pink',
    },
    {
      date: 'November 13',
      title: 'Institute Level',
      time: '10:00 AM',
      description: 'Final round of the event. Showcase your projects & compete to win!',
      icon: '📊',
      color: 'neon-cyan',
    }
  ];

  ngOnInit() {
    this.isVisible = new Array(this.timelineEvents.length).fill(false);
    this.onScroll();
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (!document) return;

    const timelineItems = document.querySelectorAll('.timeline-item');
    const windowHeight = window.innerHeight;

    timelineItems.forEach((el, index) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < windowHeight - 100) {
        this.isVisible[index] = true;
      }
    });

    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    this.scrollProgress = Math.min(100, (scrollTop / docHeight) * 100);
  }
}
