import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
     {
      text: 'למה?',
      href: '/#why',
    },
      {
      text: 'המסלולים שלי',
      href: '/#services',
    },
          {
      text: 'אודות',
      href: '/#about',
    },
           {
      text: 'למי?',
      href: '/#who',
    },
      {
      text: 'המלצות',
      href: '/#testimonials',
    },
      {
      text: 'צרו קשר',
      href: '/#contact',
    },

  ],
  actions: [{ text: 'WhatsApp', href: 'https://wa.me/972543452440', icon: 'tabler:brand-whatsapp' }],
};

export const footerData = {
  // Pulling directly from your header data
  quickLinks: headerData.links, 
  
  // Your contact info
  contact: {
    name: "רוני נתנאל",
    title: "סטייליסטית אישית",
    email: "Roni.Nathanel@gmail.com",
  },
  
  secondaryLinks: [
    { text: 'תנאי שימוש', href: '/terms' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/roninathanel' },
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/972543452440' },
        { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:Roni.Nathanel@gmail.com ' },

  ],
};
