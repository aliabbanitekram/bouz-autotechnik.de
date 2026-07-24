export const serviceMedia = {
  'ac-heating': {
    image:
      'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'brake-services': {
    image:
      'https://images.pexels.com/photos/4756887/pexels-photo-4756887.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'front-ends-alignment': {
    image:
      'https://images.pexels.com/photos/31097241/pexels-photo-31097241.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'shock-suspension': {
    image:
      'https://images.pexels.com/photos/6872174/pexels-photo-6872174.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'battery-electrical': {
    image:
      'https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'diagnostic-service': {
    image:
      'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'oil-filter-changes': {
    image:
      'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'belts-hoses': {
    image:
      'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'fuel-system-repairs': {
    image:
      'https://images.pexels.com/photos/4489719/pexels-photo-4489719.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'transmission-repair': {
    image:
      'https://images.pexels.com/photos/4489737/pexels-photo-4489737.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
}

export function getServiceMedia(id) {
  return serviceMedia[id] || serviceMedia['diagnostic-service']
}
