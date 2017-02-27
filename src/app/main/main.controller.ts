export class MainController {
  public menu = [];

  /* @ngInject */
  constructor($timeout: angular.ITimeoutService, toastr: any) {
    this.menu = [
      {
        name: 'Overview',
        link: '#',
        isOpened: true,
        font: 'fa fa-tachometer',
        submenu: [{
          name: 'Inbound',
          link: '#'
        },
        {
          name: 'Outbound',
          link: '#'
        },
        {
          name: 'Admin',
          link: '#'
        }
        ]
      },
      {
        name: 'Archive',
        link: '#',
        font: 'fa fa-archive',
        isOpened: false
      },
      {
        name: 'Settings',
        link: '#',
        isOpened: false,
        font: 'fa fa-cogs',
        submenu: [{
          name: 'Overview',
          link: '#'
        },
        {
          name: 'Antispan',
          link: '#'
        },
        {
          name: 'QMS',
          link: '#'
        },
        {
          name: 'Antivirus',
          link: '#'
        },
        {
          name: 'Inbound',
          link: '#'
        },
        {
          name: 'Outbound',
          link: '#'
        },
        {
          name: 'Archive',
          link: '#'
        },
        {
          name: 'Lists',
          link: '#'
        },
        {
          name: 'Diagnostics',
          link: '#'
        },
        {
          name: 'Users',
          link: '#'
        },
        {
          name: 'True Users',
          link: '#'
        },
        {
          name: 'Token Manager',
          link: '#'
        },
        {
          name: 'Interface',
          link: '#'
        },
        {
          name: 'Change Password',
          link: '#'
        }
        ]
      },
      {
        name: 'Statics',
        link: '#',
         font: 'fa fa-pie-chart',
        isOpened: false,
        submenu: [{
          name: 'Day',
          link: '#'
        },
        {
          name: 'Month',
          link: '#'
        },
        {
          name: 'Year',
          link: '#'
        },
        {
          name: 'Custom',
          link: '#'
        },
        {
          name: 'Total',
          link: '#'
        }
        ]
      },
      {
        name: 'Logout',
        link: '#',
         font: 'fa fa-sign-out',
        isOpened: false
        
      }
    ];
  }
  toggleMenu(name: any) {
    this.menu.forEach(element => {
      if (element.name === name) {
        element.isOpened = !element.isOpened;
      }
    });
  }
}
