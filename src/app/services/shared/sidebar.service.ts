import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any  = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Escritorio', url: '/escritorio' },
        { titulo: 'Progreso', url: '/progreso' },
        { titulo: 'Gráficas', url: '/graficas' }
      ]
    }
  ];
  constructor() { }
}
