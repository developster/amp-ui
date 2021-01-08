import React, { Component } from 'react';
import PropTypes from 'prop-types';
import APField from './APField.jsx';
import APPercentageField from './APPercentageField.jsx';
import Tablify from './Tablify.jsx';
import FieldsManager from '../../../modules/field/FieldsManager';
import styles from '../ActivityPreview.css';
import FeatureManager from '../../../modules/util/FeatureManager';
import PossibleValuesManager from '../../../modules/field/PossibleValuesManager';
import ResourceUtils from '../../../utils/ResourceUtils';
import UIUtils from '../../../utils/UIUtils';


let logger = null;

/**
 * Activity Preview Percentage List type section
 * @author Nadejda Mandrescu
 */
const APPercentageList = (listField, valueField, percentageField, listTitle = null) => class extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(FieldsManager).isRequired,
    fieldNameClass: PropTypes.string,
    fieldValueClass: PropTypes.string,
    percentTitleClass: PropTypes.string,
    percentValueClass: PropTypes.string,
    tablify: PropTypes.bool,
    columns: PropTypes.number,
    fmPath: PropTypes.string,
    getItemTitle: PropTypes.func,
    Logger: PropTypes.func.isRequired,
    translate: PropTypes.func.isRequired,
    rtl: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    const { Logger } = this.props;
    logger = new Logger('AP percentage list');
    logger.debug('constructor');
  }

  getItemTitle(item) {
    if (this.props.getItemTitle) {
      return this.props.getItemTitle(item);
    }
    return ResourceUtils.getItemTitle(item, valueField, PossibleValuesManager, this.props.rtl);
  }

  render() {
    const {
      activityFieldsManager, percentTitleClass, fmPath, activity, columns, tablify
      , percentValueClass, fieldNameClass, fieldValueClass, translate
    } = this.props;
    const title = listTitle ? translate(listTitle) : null;
    let items = activity[listField];
    let content = null;
    let isListEnabled = activityFieldsManager.isFieldPathEnabled(listField) === true;
    if (fmPath) {
      isListEnabled = FeatureManager.isFMSettingEnabled(fmPath) ? isListEnabled : false;
    }
    if (isListEnabled) {
      if (items && items.length) {
        items = items.map(item => ({
          itemTitle: this.getItemTitle(item),
          percentage: item[percentageField]
        }))
          .sort((a, b) => {
            if (a.itemTitle === null && b.itemTitle === null) {
              return 0;
            } else if (a.itemTitle === null) {
              return 1;
            } else if (b.itemTitle === null) {
              return -1;
            } else {
              return a.itemTitle.localeCompare(b.itemTitle);
            }
          });
        content = items.map(({ itemTitle, percentage }) =>
          (<APPercentageField
            key={UIUtils.stringToUniqueId(itemTitle)} title={itemTitle} value={percentage}
            titleClass={percentTitleClass} valueClass={percentValueClass} />)
        );
        if (tablify) {
          content = <Tablify content={content} columns={columns} />;
        }
        content = (<APField
          key={listField} title={title} value={content} separator={false} inline={tablify === true}
          fieldNameClass={fieldNameClass} fieldValueClass={fieldValueClass}
        />);
      } else {
        content = (<APField
          key={listField} title={title} value={translate('No Data')} separator={false}
          inline={tablify === true}
          fieldNameClass={fieldNameClass} fieldValueClass={styles.nodata}
        />);
      }
    }
    return content;
  }
};

export default APPercentageList;
