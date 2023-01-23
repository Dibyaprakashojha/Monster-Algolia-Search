import { Component, EventEmitter, forwardRef, Inject, Optional, Output } from '@angular/core';
import {
  TypedBaseWidget,
  NgAisIndex,
  NgAisInstantSearch,
} from 'angular-instantsearch';
import type {
  AutocompleteConnectorParams,
  AutocompleteWidgetDescription,
} from 'instantsearch.js/es/connectors/autocomplete/connectAutocomplete';
import { connectAutocomplete } from 'instantsearch.js/es/connectors';

@Component({
  selector: 'app-mars-auto-complete',
  templateUrl: './mars-auto-complete.component.html',
  styleUrls: ['./mars-auto-complete.component.scss']
})
export class MarsAutoCompleteComponent extends  TypedBaseWidget<
AutocompleteWidgetDescription,
AutocompleteConnectorParams
  > {
  
   override state: AutocompleteWidgetDescription['renderState'] = {
    currentRefinement: '',
    refine: () => null,
    indices: [],
  };

  @Output()
  onQuerySuggestionClick = new EventEmitter<{ query: string }>();

  constructor(
    @Inject(forwardRef(() => NgAisIndex))
    @Optional()
    public parentIndex: NgAisIndex,
    @Inject(forwardRef(() => NgAisInstantSearch))
    public instantSearchInstance: NgAisInstantSearch
  ) {
    super('AutoComplete');
    this!.createWidget(connectAutocomplete, {});
  }

  public handleChange($event: KeyboardEvent) {
    this.state.refine(($event.target as HTMLInputElement).value);
  }

  public override ngOnInit() {
    super.ngOnInit();
  }
}
