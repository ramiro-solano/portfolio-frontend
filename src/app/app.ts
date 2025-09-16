import { Component, ElementRef, signal, ViewChild } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  linkUrl: string;
  linkAriaLabel: string;
}

interface Logo {
  name: string;
  src: string;
}

interface Offer {
  title: string;
  description: string;
  price: string;
  currency: string;
  currencyDetail: string;
  delivery: string;
  details: string[];
}

interface ContactLink {
  ariaLabel: string;
  icon: string;
  text: string;
  link: string;
}

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
})
export class App {
  @ViewChild('contactSection') contactSection!: ElementRef;

	// Usando signals para todas las propiedades
	projects = signal<Project[]>([
		{
			title: 'Bluesky Mobiles',
			description: 'Sitio web para una tienda de reparación de celulares.',
			imageUrl: 'assets/images/projects/blueskymobiles-website.jpg',
			imageAlt: 'Bluesky Mobiles Sitio Web',
			linkUrl: 'https://blueskymobiles.com.ar',
			linkAriaLabel: 'Link a blueskymobiles.com.ar'
		},
		{
			title: 'Tarjeta de 15 años',
			description: 'Invitación digital interactiva para una fiesta de 15 años.',
			imageUrl: 'assets/images/projects/tarjeta-luciana-15.png',
			imageAlt: 'Tarjeta de 15 años',
			linkUrl: 'https://tarjeta-luciana-15.vercel.app/',
			linkAriaLabel: 'Link a invitación de 15 años'
		}		
		// Agregar más proyectos aquí
	]);

	logos = signal<Logo[]>([
		{
			name: 'Angular',
			src: '../../../../assets/logos/angular-logo.svg'
		},
		{
			name: 'Typescript',
			src: '../../../../assets/logos/typescript-logo.svg'
		},
		{
			name: 'Tailwind CSS',
			src: '../../../../assets/logos/tailwindcss-logo.svg'
		},
		{
			name: 'Figma',
			src: '../../../../assets/logos/figma-logo.svg'
		},
	]);

	offers = signal<Offer[]>([
		{
			title: 'Landing Page',
			description: 'Lo esencial para mostrar tu trabajo o empresa a tus clientes. Destaca tus mejores proyectos con estilo.',
			price: '$95',
			currency: 'USD',
			currencyDetail: '(ARS) calculados con dólar blue',
			delivery: 'Entrega en 4 días',
			details: [
				'1 página',
				'Diseño web moderno',
				'Integración de redes sociales',
				'2 revisiones',
				'Código fuente'
			]
		},
		{
			title: 'Sitio web',
			description: 'Amplifica tu presencia en línea. Maximiza tu impacto digital con esta potente solución.',
			price: '$130',
			currency: 'USD',
			currencyDetail: '(ARS) calculados con dólar blue',
			delivery: 'Entrega en 4-10 días',
			details: [
				'2-4 páginas',
				'Diseño web moderno',
				'Integración de redes sociales',
				'2-4 revisiones',
				'Código fuente',
				'Modo oscuro/claro',
				'Animaciones'
			]
		},
		{
			title: 'Sitio web personalizado',
			description: 'Diseñado para aquellos que buscan algo más específico y atinado a su sector.',
			price: 'Personalizado',
			currency: '',
			currencyDetail: '(ARS) calculados con dólar blue',
			delivery: 'Indefinido',
			details: [
				'Ilimitadas páginas y revisiones',
				'Diseño/estilo personalizado',
				'Características personalizadas ',
				'Modo oscuro/claro',
				'Código fuente'
			]
		}
	]);

	contactLinks = signal<ContactLink[]>([
		{	
			ariaLabel: 'Link de email',
			icon: '../../../../assets/icons/email.svg',
			text: 'rramiro.solano@gmail.com',
			link: 'mailto:rramiro.solano@gmail.com'
		},
		{
			ariaLabel: 'Link de Github',
			icon: '../../../../assets/icons/github-logo.svg',
			text: 'Github',
			link: 'https://github.com/ramiro-solano'
		},
		{
			ariaLabel: 'Link de WhatsApp',
			icon: '../../../../assets/icons/whatsapp-logo.svg',
			text: 'WhatsApp',
			link: 'https://wa.me/message/5X3YVOHO2UFLB1'
		},
		{
			ariaLabel: 'Link de LinkedIn',
			icon: '../../../../assets/icons/linkedin-logo.svg',
			text: ' LinkedIn',
			link: 'https://www.linkedin.com/in/ramiro-solano'
		},
	]);

	scroollToContat() {
		this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
	}
}
