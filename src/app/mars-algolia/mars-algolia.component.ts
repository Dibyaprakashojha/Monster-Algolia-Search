import { Component, OnInit } from '@angular/core';
import algoliasearch from 'algoliasearch/lite';
import aa from 'search-insights';
import {
  TypedBaseWidget,
  NgAisIndex,
  NgAisInstantSearch,
} from 'angular-instantsearch';
import { ActivatedRoute } from '@angular/router';
import insights from 'search-insights/dist/insights';
import { environment } from 'src/environments/environment';
const searchClient = algoliasearch(
  environment.applicationId,
  environment.apiKey
);

@Component({
  selector: 'app-mars-algolia',
  templateUrl: './mars-algolia.component.html',
  styleUrls: ['./mars-algolia.component.scss'],
})
export class MarsAlgoliaComponent implements OnInit {
  userName = '';
  loggedInuser = '';
  userToken = {};
  constructor(public activatedRoute: ActivatedRoute) {}
  config = {
    indexName: environment.indexName,
    searchClient,
    insightsClient: (window as any).aa,
  };

  public searchParameters = {
    query: '',
  };

  public setQuery({ query }: { query: string }) {
    this.searchParameters.query = query;
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.loggedInuser = params['username'];
    });
    this.userName =
      this.loggedInuser === 'ben' ? 'Ben Williams' : 'Carlos Juan';
  }

  sendUser(hit: any) {
    return {
      eventName: 'Product Clicked',
      objectIDs: [hit.objectID],
      userToken: this.loggedInuser,
    };
  }
}
