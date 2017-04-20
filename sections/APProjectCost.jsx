import React, { Component, PropTypes } from 'react';
import Section from './Section';
import styles from '../ActivityPreview.css';
import * as AC from '../../../../utils/constants/ActivityConstants';
import ActivityFieldsManager from '../../../../modules/activity/ActivityFieldsManager';
import translate from '../../../../utils/translate';
import LoggerManager from '../../../../modules/util/LoggerManager';

/**
 * Activity Preview Proposed Project Cost section
 * @author Nadejda Mandrescu
 */
const APProjectCost = (fieldName) => class extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(ActivityFieldsManager).isRequired
  };

  constructor(props) {
    super(props);
    LoggerManager.log('constructor');
  }

  getFieldValue(fieldPath) {
    // apparently you can disable Amount in FM... but probably this is unrealistic to happen
    if (this.props.activityFieldsManager.isFieldPathEnabled(fieldPath)) {
      return this.props.activityFieldsManager.getValue(this.props.activity, fieldPath);
    }
    return null;
  }

  render() {
    let content = null;
    if (this.props.activityFieldsManager.isFieldPathEnabled(fieldName) === true) {
      // TODO number formatting
      const amount = this.getFieldValue(`${fieldName}~${AC.AMOUNT}`);
      // TODO currency conversion
      const currency = this.getFieldValue(`${fieldName}~${AC.CURRENCY_CODE}`);
      // TODO date formatting AMPOFFLINE-129
      const date = this.getFieldValue(`${fieldName}~${AC.FUNDING_DATE}`);
      content = (<div>
        <div>
          <span className={styles.field_name}>{translate('Cost')} </span>
          <span className={styles.field_value}>{amount} {currency}</span>
        </div>
        <div>
          <span className={styles.field_name}>{translate('Date')}</span>
          <span className={styles.field_value}>{date}</span>
        </div>
      </div>);
    }
    return content;
  }
};

export const APProposedProjectCost = Section(APProjectCost(AC.PPC_AMOUNT), 'Proposed Project Cost');
export const APRevisedProjectCost = Section(APProjectCost(AC.RPC_AMOUNT), 'Revised Project Cost');
