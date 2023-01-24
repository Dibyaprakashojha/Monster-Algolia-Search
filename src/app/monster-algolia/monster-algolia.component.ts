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
  selector: 'app-monster-algolia',
  templateUrl: './monster-algolia.component.html',
  styleUrls: ['./monster-algolia.component.scss'],
})
export class MonsterAlgoliaComponent implements OnInit {
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
      this.loggedInuser = params['userId'];
    });
    this.userName =
      this.loggedInuser === 'ben' ? 'Ben Williams' : 'Carlos Juan';
  }

  sendUser(hit: any) {
    console.log({
      eventName: 'Product Clicked',
      objectIDs: [hit.objectID],
      userToken: this.loggedInuser,
    });
    return {
      eventName: 'Product Clicked',

      objectIDs: [hit.objectID],
      userToken: this.loggedInuser,
    };
  }
}
