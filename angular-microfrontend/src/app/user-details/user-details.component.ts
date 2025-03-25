import { CommonModule } from '@angular/common'
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpContext } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { DynamicErrorInterceptor, ERROR_CONTEXT, ErrorContext } from '../../interceptors/dynamic-error.interceptor'

@Component({
  selector: 'app-user-details',
  imports: [CommonModule, HttpClientModule],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  standalone: true,
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DynamicErrorInterceptor,
      multi: true
    }
  ]
})

export class UserDetailsComponent implements OnInit {
  //NOTA: pongo los datos en tipado ANY por conveniencia en la prueba, pero en la realidad esto deberia evitarse...
  user: any
  loading = true
  error: string | null = null
  followers: any[] = []
  repositories: any[] = []
  organizations: any[] = []
  suscriptions: any[] = []

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const login = params.get('login');
      if (login) {
        this.fetchUser(login); // Método unificado
      } else {
        this.error = 'No se especificó nombre de usuario';
        this.loading = false;
      }
    });
  }

  private fetchUser(login: string) {
    this.http.get<any>(`https://api.github.com/users/${login}`)
      .subscribe({
        next: (userData) => {
          this.user = userData;
          this.getFollowers();
          this.getRepositories()
          this.getOrganizations()
          this.getSuscriptions()
        },
        error: (err) => {
          this.error = err.message;
          this.loading = false;
        }
      });
  }

  private getFollowers() {
    const context: ErrorContext = {
      key: 'followers',
      customMessage: 'Error al obtener seguidores'
    };
    
    this.http.get<any[]>(this.user.followers_url, { 
      context: new HttpContext().set(ERROR_CONTEXT, context)
    }).subscribe({
      next: (followersData) => {
        this.followers = followersData;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  private getRepositories() {
    const context: ErrorContext = {
      key: 'repositories',
      customMessage: 'Error al obtener los repositorios'
    };

    this.http.get<any[]>(this.user.repos_url, { 
      context: new HttpContext().set(ERROR_CONTEXT, context)
    }).subscribe({
      next: (repositoriesData) => {
        this.repositories = repositoriesData;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  private getOrganizations() {
    const context: ErrorContext = {
      key: 'organizations',
      customMessage: 'Error al obtener las organizaciones'
    };

    this.http.get<any[]>(this.user.organizations_url, { 
      context: new HttpContext().set(ERROR_CONTEXT, context)
    }).subscribe({
      next: (organizationsData) => {
        this.organizations = organizationsData;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }

  private getSuscriptions() {
    const context: ErrorContext = {
      key: 'suscriptions',
      customMessage: 'Error al obtener las suscripciones'
    };

    this.http.get<any[]>(this.user.subscriptions_url, { 
      context: new HttpContext().set(ERROR_CONTEXT, context)
    }).subscribe({
      next: (suscriptionsData) => {
        this.suscriptions = suscriptionsData;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener las suscripciones:', err);
        this.loading = false;
      }
    });
  }
}
