import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestBeerByIngredientModelUI } from '../../../models/beer.models';

@Component({
    selector: 'beer-form',
    templateUrl: 'beer-form.component.html',
    styleUrls: ['./beer-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BeerFormComponent implements OnInit {

    public requestForm: FormGroup;

    @Input() private lastSearchTerm: string;

    @Output() public beerFormEmitter: EventEmitter<RequestBeerByIngredientModelUI> = new EventEmitter();

    constructor(
        private formBuilder: FormBuilder
    ) { }

    /**
     * Initialize request form with empty values
     */
    public ngOnInit(): void {
        this.requestForm = this.formBuilder.group({
            Ingredient: [this.lastSearchTerm, Validators.required]
        });
    }

    /**
     * Emit request form values to parent component
     */
    private onSubmitBeerForm(): void{
        this.beerFormEmitter.emit(this.requestForm.value);
    }
}