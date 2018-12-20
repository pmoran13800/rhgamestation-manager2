import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Loader from 'react-loader';
import StickyAlert from '../utils/StickyAlert';
import RHGamestationConfForm from '../forms/RHGamestationConf';

let stickyContainer;

const RHGamestationConf = ({ t, loaded, stickyStyle, stickyContent, ...rest }) => (
  <div ref={el => stickyContainer = el}>
    <div className="page-header">
      <h1>rhgamestation.conf</h1>
    </div>

    <StickyAlert bsStyle={stickyStyle} container={stickyContainer}>
      {stickyContent}
    </StickyAlert>

    <div className="bs-callout bs-callout-info">
      <p>
        {t("Si jamais les autres vues ne suffisent pas, le contenu du fichier rhgamestation.conf peut-être entièrement vu et modifié via cette interface.")}
      </p>
    </div>

    <Loader loaded={loaded}>
      <RHGamestationConfForm {...rest} />
    </Loader>
  </div>
);

RHGamestationConf.propTypes = {
  t: PropTypes.func.isRequired,
  loaded: PropTypes.bool.isRequired,
  stickyStyle: PropTypes.string,
  stickyContent: PropTypes.string,
};

export default translate()(RHGamestationConf);
