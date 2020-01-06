export default {
  items: [
    {
      name: 'dashboard',
      url: '/dashboard',
      icon: 'fa fa-home',
    },

    {
      divider: true,
    },
    {
      name: 'List of Event',
      url: '/dashboard/getAllEvents',
      icon: 'fa fa-calendar-plus-o',
    },
    {
      divider: true,
    },

    {
      name: 'Add New Event',
      url: '/dashboard/Addevent',
      icon: 'fa fa-calendar',
    },

    {
      divider: true,
    },

    {
      name: 'Contact sponsor',
      url: '/dashboard/sponsor',
      icon: 'fa fa-users',
    },
  ],
};
