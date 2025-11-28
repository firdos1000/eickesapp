import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Todos } from '../../service/todos';
import { NgIf } from '@angular/common';   // <-- WICHTIG

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgIf],           // <-- HIER hinzufügen
  templateUrl: './header.html',
  styleUrl: './header.scss',
  providers: [Todos]
})
export class Header 
{
  title = signal('HOME');
  smart = signal('SMARTHOME');
  einbruchschutz = signal('EINBRUCHSCHUTZ');
  videotechnik = signal('VIDEOTECHNIK');
  markerlight = signal('MARKERLIGHT');
  docklight = signal('DOCKLIGHT');

  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
