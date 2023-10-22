import { Component, OnInit } from '@angular/core';
import { ISidebarItem } from './sidebar.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  items: ISidebarItem[] = [
    {
      title: 'Calendar',
      icon: 'calendar_month',
      path: '/calendar',
      active: false,
    },
    {
      title: 'Progress',
      icon: 'equalizer',
      path: '/progress',
      active: false,
    },
    {
      title: 'Statistics',
      icon: 'show_chart',
      path: '/statistics',
      active: false,
    },
    {
      title: 'Friends',
      icon: 'group',
      path: '/friends',
      active: false,
    },
    {
      title: 'Notes',
      icon: 'description',
      path: '/notes',
      active: false,
    },
    {
      title: 'Plan',
      icon: 'next_plan',
      path: '/plan',
      active: false,
    },
  ];

  constructor(private router: Router) {
    console.log(router.url);
  }

  ngOnInit() {
    this.items = this.items.map((item) =>
      this.router.url.includes(item.path) ? { ...item, active: true } : item,
    );
  }
}
