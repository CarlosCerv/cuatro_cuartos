const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const siteUrl = 'https://cuatro-cuartos-delta.vercel.app/';
const whatsappBase = 'https://wa.me/';
const showroomMessage = 'Hola, quiero agendar una visita al taller de Cuatro Cuartos.';

const pieces = [
  {
    id: '01',
    slug: 'sillon-oku',
    name: 'Sillon Oku',
    category: 'Sala',
    material: 'Roble y lino',
    price: '$38,000 MXN',
    artisan: 'Luis Navarro',
    hours: '68 horas de fabricacion',
    image: '/images/hero.jpg',
    featured: true,
    aspectRatio: '4 / 3',
    message: 'Hola, me interesa el Sillon Oku. Quiero conocer disponibilidad y acabados.',
  },
  {
    id: '02',
    slug: 'mesa-kuri',
    name: 'Mesa Kuri',
    category: 'Comedor',
    material: 'Nogal y concreto pulido',
    price: '$52,000 MXN',
    artisan: 'Andrea Michel',
    hours: '112 horas de fabricacion',
    image: '/images/gallery1.jpg',
    featured: false,
    aspectRatio: '4 / 5',
    message: 'Hola, me interesa la Mesa Kuri. Quiero conocer medidas y tiempos de entrega.',
  },
  {
    id: '03',
    slug: 'banca-ren',
    name: 'Banca Ren',
    category: 'Recámara',
    material: 'Nogal y lino crudo',
    price: '$24,500 MXN',
    artisan: 'Mariana Vazquez',
    hours: '54 horas de fabricacion',
    image: '/images/gallery2.jpg',
    featured: false,
    aspectRatio: '3 / 4',
    message: 'Hola, me interesa la Banca Ren. Quiero conocer tapices y disponibilidad.',
  },
  {
    id: '04',
    slug: 'lampara-hikari',
    name: 'Lampara Hikari',
    category: 'Iluminación',
    material: 'Ceramica y laton satinado',
    price: '$16,800 MXN',
    artisan: 'Juan Pablo Nuno',
    hours: '40 horas de fabricacion',
    image: '/images/gallery3.jpg',
    featured: false,
    aspectRatio: '4 / 5',
    message: 'Hola, me interesa la Lampara Hikari. Quiero conocer acabado y existencia.',
  },
  {
    id: '05',
    slug: 'credenza-sora',
    name: 'Credenza Sora',
    category: 'Sala',
    material: 'Roble ahumado',
    price: '$61,000 MXN',
    artisan: 'Luis Navarro',
    hours: '120 horas de fabricacion',
    image: '/images/gallery1.jpg',
    featured: false,
    aspectRatio: '5 / 4',
    message: 'Hola, me interesa la Credenza Sora. Quiero conocer medidas y acabados.',
  },
  {
    id: '06',
    slug: 'cabecera-tsuki',
    name: 'Cabecera Tsuki',
    category: 'Recámara',
    material: 'Lino, encino y ceramica',
    price: '$34,000 MXN',
    artisan: 'Andrea Michel',
    hours: '72 horas de fabricacion',
    image: '/images/gallery2.jpg',
    featured: false,
    aspectRatio: '16 / 11',
    message: 'Hola, me interesa la Cabecera Tsuki. Quiero conocer opciones de personalizacion.',
  },
];

const materials = [
  { name: 'Roble', color: '#A67955' },
  { name: 'Nogal', color: '#6A4A35' },
  { name: 'Concreto', color: '#ACA59B' },
  { name: 'Lino', color: '#D9CFBF' },
  { name: 'Ceramica', color: '#C46F4B' },
];

const processSteps = [
  {
    title: 'Diseno',
    duration: '8-16 horas',
    detail: 'Bocetos editoriales, proporciones y dialogo con el espacio.',
    icon: 'design',
  },
  {
    title: 'Seleccion',
    duration: '12-24 horas',
    detail: 'Busqueda de vetas, textiles y ceramicas con variacion natural.',
    icon: 'selection',
  },
  {
    title: 'Talla',
    duration: '40-120 horas por pieza',
    detail: 'Fabricacion manual, ensambles honestos y estructura duradera.',
    icon: 'carving',
  },
  {
    title: 'Acabado',
    duration: '10-18 horas',
    detail: 'Sellado mate, tacto natural y revision final del objeto.',
    icon: 'finish',
  },
];

const testimonials = [
  {
    quote: 'La pieza no se siente comprada; se siente descubierta.',
    author: 'Sofia R.',
    city: 'Guadalajara',
  },
  {
    quote: 'Tiene la presencia de una galeria, pero con la calidez de un taller vivo.',
    author: 'Daniel M.',
    city: 'Ciudad de Mexico',
  },
  {
    quote: 'Cada veta, cada union, cada detalle sostiene la idea del tiempo.',
    author: 'Paula G.',
    city: 'San Pedro Garza Garcia',
  },
];

const hours = [
  { day: 'Monday', opens: '10:00', closes: '18:00' },
  { day: 'Tuesday', opens: '10:00', closes: '18:00' },
  { day: 'Wednesday', opens: '10:00', closes: '18:00' },
  { day: 'Thursday', opens: '10:00', closes: '18:00' },
  { day: 'Friday', opens: '10:00', closes: '18:00' },
  { day: 'Saturday', opens: '10:00', closes: '18:00' },
];

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Cuatro Cuartos',
  image: `${siteUrl}images/hero.jpg`,
  url: siteUrl,
  description: 'Galeria de muebles de autor premium en Tonala, Jalisco. Piezas hechas a mano con una sensibilidad wabi-sabi y artesania local.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Av. Tonaltecas 123',
    addressLocality: 'Tonala',
    addressRegion: 'Jalisco',
    postalCode: '45400',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 20.6234,
    longitude: -103.2416,
  },
  openingHoursSpecification: hours.map((slot) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: `https://schema.org/${slot.day}`,
    opens: slot.opens,
    closes: slot.closes,
  })),
  sameAs: ['https://share.google/S7ijYsa1WEeL4vuyW'],
};

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    meta: {
      title: 'Cuatro Cuartos · Muebles de Autor en Tonalá, Jalisco',
      description: 'Galeria de muebles de autor en Tonala, Jalisco. Piezas hechas a mano bajo una sensibilidad wabi-sabi, con materiales honestos y fabricacion artesanal.',
      url: siteUrl,
    },
    navigation: [
      { label: 'Coleccion', href: '#coleccion' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Filosofia', href: '#filosofia' },
      { label: 'Taller', href: '#taller' },
      { label: 'Contacto', href: '#footer' },
    ],
    pieces,
    materials,
    processSteps,
    testimonials,
    hours,
    showroomMapUrl: 'https://share.google/S7ijYsa1WEeL4vuyW',
    whatsappBase,
    showroomMessage,
    schema: JSON.stringify(localBusinessSchema),
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;
