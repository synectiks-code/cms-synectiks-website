import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import ServicePostPreview from './preview-templates/ServicePostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import SurveyTemplate from './preview-templates/SurveyPreview';
import WorkflowTemplate from './preview-templates/WorkflowPreview';
import ScenarioPagePreview from './preview-templates/ScenarioPagePreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('service', ServicePostPreview);
CMS.registerPreviewTemplate('survey', SurveyTemplate);
CMS.registerPreviewTemplate('workflow', WorkflowTemplate);
CMS.registerPreviewTemplate('scenario', ScenarioPagePreview);
