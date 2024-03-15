'use client'

import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export default function Resume() {
    return (
<Viewer
    fileUrl='./public/resume_PR.pdf'
    plugins={[
        // Register plugins
        defaultLayoutPluginInstance,
    ]}/>
    );
}