import React, { Component, PropTypes } from 'react';
import Section from './Section';
import ActivityFieldsManager from '../../../../modules/activity/ActivityFieldsManager';
import { ACTIVITY_INTERNAL_IDS } from '../../../../utils/constants/ActivityConstants';
import { ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH } from '../../../../utils/constants/FieldPathConstants';
import translate from '../../../../utils/translate';
import LoggerManager from '../../../../modules/util/LoggerManager';

/* eslint-disable class-methods-use-this */

/**
 * Organizations and project ids section
 * @author Nadejda Mandrescu
 */
const APInternalIdsSection = (isSeparateSection) => class extends Component {
  static propTypes = {
    activity: PropTypes.object.isRequired,
    activityFieldsManager: PropTypes.instanceOf(ActivityFieldsManager).isRequired
  };

  constructor(props) {
    super(props);
    LoggerManager.log('constructor');
  }

  _getActInternalIdContent(actIntId, showInternalId) {
    let intId;
    if (showInternalId) {
      intId = <span>{actIntId.internalId}</span>;
    }
    return (
      <div key={actIntId.organization.value}>
        <span>[{ actIntId.organization.value }]</span>
        { intId }
      </div>);
  }

  buildContent() {
    let orgIds;
    if (this.props.activityFieldsManager.isFieldPathEnabled(ACTIVITY_INTERNAL_IDS)) {
      const showInternalId = this.props.activityFieldsManager.isFieldPathEnabled(
        ACTIVITY_INTERNAL_IDS_INTERNAL_ID_PATH);
      orgIds = [];
      const actIntIds = this.props.activityFieldsManager.getValue(this.props.activity, ACTIVITY_INTERNAL_IDS);
      if (actIntIds && actIntIds.length > 0) {
        actIntIds.forEach(actIntId => orgIds.push(this._getActInternalIdContent(actIntId, showInternalId)));
      }
    }
    return orgIds && orgIds.lenght > 0 ? orgIds : null;
  }

  render() {
    let content = this.buildContent();
    if (isSeparateSection === true) {
      content = <div>{content}</div>;
    } else if (content) {
      content = content.map(orgData => (<li key={orgData.key}>{orgData}</li>));
      content = (
        <div key="InternalIdsFromIdentificationSection">
          <span>{ translate('Organizations and Project IDs') }</span>
          <ul>
            { content }
          </ul>
        </div>
      );
    }
    return content;
  }

};

export const APInternalIds = Section(APInternalIdsSection(true), 'Agency Internal IDs');
export const APInternalIdsFromIdentification = Section(APInternalIdsSection(false), null, false);
