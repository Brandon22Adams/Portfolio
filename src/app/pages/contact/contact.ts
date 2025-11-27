import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatIconModule, MatButtonModule, MatSnackBarModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private user = 'brandon22adams';
  private domain = 'gmail.com';

  get mailto(): string {
    return `mailto:${this.user}@${this.domain}`;
  }

  constructor(private snackbar: MatSnackBar) {}

  public navigateTo(location: string): void {
    switch (location) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/brandonadams22/', '_blank')?.focus()
        break;
      case 'git':
        window.open('https://github.com/Brandon22Adams', '_blank')?.focus()
        break;
      case 'itchio':
        window.open('https://codewordz.itch.io/', '_blank')?.focus()
        break;
      case 'email':
          navigator.clipboard.writeText('brandon22adams@gmail.com')
          this.snackbar.open('Copied email to clipboard', 'Close')
          window.location.href = `mailto:brandon22adams@gmail.com`
        break;
      case 'download':
          window.open('/Brandon_Adams_Resume.pdf', '_blank')?.focus();
        break;

      default:
        break;
    }
  }
}
