import { ObservableValue } from "azure-devops-ui/Core/Observable";
import { FormItem } from "azure-devops-ui/FormItem";
import { TextField, TextFieldWidth } from "azure-devops-ui/TextField";
import * as React from "react";

const simpleObservable = new ObservableValue<string>("");

export default class TextFieldFormItemExample extends React.Component<any, any> {
    public render(): JSX.Element {
        return (
            <FormItem
                label="Spy name:"
                message="Use an exciting spy name for identification"
            >
                <TextField
                    value={simpleObservable}
                    onChange={this.onChange}
                    placeholder="Search keyword"
                    width={TextFieldWidth.standard}
                />
            </FormItem>
        );
    }

    private onChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        newValue: string
    ) => {
        simpleObservable.value = newValue;
    };
}
