export const serviceMedia = {
  achsgeometrie: {
    image:
      'https://images.pexels.com/photos/31097241/pexels-photo-31097241.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  autoglas: {
    image:
      'https://images.pexels.com/photos/3807386/pexels-photo-3807386.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  elektrik: {
    image:
      'https://images.pexels.com/photos/4489734/pexels-photo-4489734.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  emobility: {
    image:
      'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  raeder: {
    image:
      'https://images.pexels.com/photos/3807277/pexels-photo-3807277.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  reifenservice: {
    image:
      'https://images.pexels.com/photos/7367864/pexels-photo-7367864.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  'hu-au': {
    image:
      'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  unfallreparatur: {
    image:
      'https://images.pexels.com/photos/6872174/pexels-photo-6872174.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  wartung: {
    image:
      'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  klima: {
    image:
      'https://images.pexels.com/photos/3807329/pexels-photo-3807329.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  bremsen: {
    image:
      'https://images.pexels.com/photos/4756887/pexels-photo-4756887.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
  oelwechsel: {
    image:
      'https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&w=1200',
    source: 'Pexels',
  },
}

export function getServiceMedia(id) {
  return serviceMedia[id] || serviceMedia.wartung
}
