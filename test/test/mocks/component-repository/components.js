import { redhatImg } from 'test/mocks/component-repository/componentImages';
import {
  ECR_COMPONENT_INSTALLATION_STATUS_CREATED,
  ECR_COMPONENT_INSTALLATION_STATUS_IN_PROGRESS,
  ECR_COMPONENT_INSTALLATION_STATUS_COMPLETED,
  ECR_COMPONENT_INSTALLATION_STATUS_ERROR,
  ECR_COMPONENT_UNINSTALLATION_STATUS_CREATED,
  ECR_COMPONENT_UNINSTALLATION_STATUS_IN_PROGRESS,
  ECR_COMPONENT_UNINSTALLATION_STATUS_ERROR,
  ECR_COMPONENT_UNINSTALLATION_STATUS_COMPLETED,
} from 'state/component-repository/components/const';

export const LIST_ECR_COMPONENTS_OK = [
  {
    code: 'example-bundle-1',
    title: 'Example bundle 1 title',
    description: 'Example bundle description 1',
    thumbnail: redhatImg,
    componentTypes: [
      'bundle',
    ],
    installedJob: null,
    lastJob: {
      id: 'eac7fce5-688d-4826-9257-08eeb6bb0f04',
      componentId: 'cms-quickstart-bundle',
      componentName: 'Entando Example CMS Bundle',
      componentVersion: 'v0.0.2',
      startedAt: '2020-07-27T15:47:14.573',
      finishedAt: '2020-07-27T15:47:16.372',
      status: 'INSTALL_ROLLBACK',
      componentJobs: [],
    },
    versions: [
      {
        version: 'v0.0.1',
      },
      {
        version: 'v0.0.2',
      },
    ],
    latestVersion: {
      version: 'v0.0.2',
    },
    installed: false,
  },
  {
    code: 'installed-example-bundle',
    title: 'Example bundle title',
    description: 'Example bundle description, this bundle contains lastUpdate!',
    thumbnail: null,
    componentTypes: [
      'pageTemplate',
      'bundle',
      'widget',
    ],
    installedJob: {
      id: '6a5b0d30-729e-49c1-be66-48f4eee4c4af',
      componentId: 'installed-example-bundle',
      componentName: 'Example bundle title',
      componentVersion: 'v0.0.1',
      startedAt: '2020-07-27T11:14:56.79',
      finishedAt: '2020-07-27T11:15:01.395',
      status: 'INSTALL_COMPLETED',
      componentJobs: [],
    },
    lastJob: {
      id: '6a5b0d30-729e-49c1-be66-48f4eee4c4af',
      componentId: 'installed-example-bundle',
      componentName: 'Example bundle title',
      componentVersion: 'v0.0.1',
      startedAt: '2020-07-27T11:14:56.79',
      finishedAt: '2020-07-27T11:15:01.395',
      status: 'INSTALL_COMPLETED',
      componentJobs: [],
    },
    lastUpdate: '2020-07-27T11:14:56.79',
    versions: [
      {
        version: 'v0.0.1',
      },
    ],
    latestVersion: {
      version: 'v0.0.1',
    },
    installed: true,
  },
  {
    code: 'regular-3-version-bundle',
    title: 'Regular 3 version bundle',
    description: 'Example bundle description',
    thumbnail: null,
    componentTypes: [
      'pageTemplate',
      'bundle',
      'widget',
    ],
    installedJob: null,
    lastJob: null,
    versions: [
      {
        version: 'v0.0.1',
      },
      {
        version: 'v0.0.2',
      },
      {
        version: 'v0.0.3',
      },
    ],
    latestVersion: {
      version: 'v0.0.3',
    },
    installed: false,
  },
  {
    code: 'install-error-bundle',
    title: 'Failed install bundle',
    description: 'Example bundle description: INSTALL_ERROR, fragment, contentTemplate, widget, plugin, pageTemplate, page, bundle, contentType',
    thumbnail: null,
    componentTypes: [
      'fragment',
      'contentTemplate',
      'widget',
      'plugin',
      'pageTemplate',
      'page',
      'bundle',
      'contentType',
    ],
    installedJob: null,
    lastJob: {
      id: '5743fc3c-5e16-4d5f-9d50-bc5842509e6c',
      componentId: 'install-error-bundle',
      componentName: 'Failed install bundle',
      componentVersion: 'v0.0.2',
      startedAt: '2020-07-27T11:14:52.967',
      finishedAt: '2020-07-27T11:14:55.187',
      status: 'INSTALL_ERROR',
      errorMessage: 'Error reading bundle',
      componentJobs: [],
    },
    versions: [
      {
        version: 'v0.0.2',
      },
      {
        version: 'v0.0.1',
      },
      {
        version: '0.0.1',
      },
    ],
    latestVersion: {
      version: 'v0.0.2',
    },
    installed: false,
  },
  {
    code: 'example-bundle-7',
    title: 'Installed latest version bundle',
    description: 'Example bundle description',
    thumbnail: null,
    componentTypes: [
      'pageTemplate',
      'bundle',
      'fragment',
    ],
    installedJob: {
      id: '0bcc2f12-3e36-4ec5-a5f8-fde416507d84',
      componentId: 'example-bundle-7',
      componentName: 'Installed latest version bundle',
      componentVersion: 'v0.0.2',
      startedAt: '2020-07-27T11:14:53.811',
      finishedAt: '2020-07-27T11:14:56.015',
      status: 'INSTALL_COMPLETED',
      componentJobs: [],
    },
    lastJob: {
      id: '0bcc2f12-3e36-4ec5-a5f8-fde416507d84',
      componentId: 'example-bundle-7',
      componentName: 'Installed latest version bundle',
      componentVersion: 'v0.0.2',
      startedAt: '2020-07-27T11:14:53.811',
      finishedAt: '2020-07-27T11:14:56.015',
      status: 'INSTALL_COMPLETED',
      componentJobs: [],
    },
    versions: [
      {
        version: 'v0.0.2',
      },
      {
        version: 'v0.0.1',
      },
    ],
    latestVersion: {
      version: 'v0.0.2',
    },
    installed: true,
  },
];

export const GET_ECR_COMPONENT_OK = LIST_ECR_COMPONENTS_OK[0];

const componentInstallation = {
  componentId: 'component_id',
  componentName: 'Component Name',
  componentVersion: '5.1.0',
  started: 1548855801000,
  ended: 1548855803000,
  user: 'admin',
  progress: 1,
  errorMessage: null,
};

export const COMPONENT_INSTALLATION_CREATED = {
  ...componentInstallation,
  status: ECR_COMPONENT_INSTALLATION_STATUS_CREATED,
};

export const COMPONENT_INSTALLATION_IN_PROGRESS = {
  ...componentInstallation,
  status: ECR_COMPONENT_INSTALLATION_STATUS_IN_PROGRESS,
};

export const COMPONENT_INSTALLATION_COMPLETED = {
  ...componentInstallation,
  status: ECR_COMPONENT_INSTALLATION_STATUS_COMPLETED,
};

export const COMPONENT_INSTALLATION_ERROR = {
  ...componentInstallation,
  status: ECR_COMPONENT_INSTALLATION_STATUS_ERROR,
};

export const COMPONENT_UNINSTALLATION_CREATED = {
  ...componentInstallation,
  status: ECR_COMPONENT_UNINSTALLATION_STATUS_CREATED,
};

export const COMPONENT_UNINSTALLATION_IN_PROGRESS = {
  ...componentInstallation,
  status: ECR_COMPONENT_UNINSTALLATION_STATUS_IN_PROGRESS,
};

export const COMPONENT_UNINSTALLATION_COMPLETED = {
  ...componentInstallation,
  status: ECR_COMPONENT_UNINSTALLATION_STATUS_COMPLETED,
};

export const COMPONENT_UNINSTALLATION_ERROR = {
  ...componentInstallation,
  status: ECR_COMPONENT_UNINSTALLATION_STATUS_ERROR,
};

export const COMPONENT_USAGE_LIST = [{
  code: 'test-widget',
  type: 'widget',
  usage: 1,
}, {
  code: 'test-fragment',
  type: 'fragment',
  usage: 0,
}, {
  code: 'test-page',
  type: 'page',
  usage: 2,
}];
