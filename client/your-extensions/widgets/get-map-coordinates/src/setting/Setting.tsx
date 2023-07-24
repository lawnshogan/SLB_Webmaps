/** @jsx jsx */
import { IMConfig as IMConfigCore, React, jsx } from "jimu-core";
import { AllWidgetSettingProps } from "jimu-for-builder";
import { IMConfig } from "../config";
import { 
    JimuMapViewSelector, 
    SettingSection, 
    SettingRow 
} from "jimu-ui/advanced/setting-components";

export default class Setting extends React.PureComponent<
    AllWidgetSettingProps<IMConfig>,
    any
    > {

    onMapWidgetSelected = (useMapWidgetIDs: string []) => {
        this.props.onSettingChange({
            id: this.props.id,
            useMapWidgetIds: useMapWidgetIDs,
        });
    };

  render() {
    return (
      <div>
        <div className="widget-setting-get-map-coordinates">
            <SettingSection className="map-selector-section"
            title="Map Widget">
                <SettingRow>
                    <JimuMapViewSelector
                        onSelect={this.onMapWidgetSelected}
                        useMapWidgetIds={this.props.useMapWidgetIds}
                        />
                </SettingRow>
            </SettingSection>
        </div>
      </div>
    )
  }
}
