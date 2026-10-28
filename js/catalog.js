/* ==========================================================================
   HINDWARE PREMIUM - CATALOG PAGE JAVASCRIPT
   ========================================================================== */

(function() {
    'use strict';

    function init() {
        setupDownloadButton();
        setupQuickDownloads();
    }

    function setupDownloadButton() {
        const btn = $('#downloadCatalog');
        if (!btn) return;

        btn.addEventListener('click', async () => {
            const originalHTML = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = '<svg class="animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:20px;height:20px;margin-right:8px"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-opacity="1"/></svg>Preparing...';

            try {
                await simulateDownload();
                window.HindwarePremium.showToast('Catalog download started!', 'success');
            } catch {
                window.HindwarePremium.showToast('Download failed. Please try again.', 'error');
            } finally {
                btn.disabled = false;
                btn.innerHTML = originalHTML;
            }
        });
    }

    function simulateDownload() {
        return new Promise(resolve => setTimeout(resolve, 1500));
    }

    function setupQuickDownloads() {
        $$('.quick-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const card = link.closest('.quick-card');
                const title = card?.querySelector('h3')?.textContent || 'Document';
                window.HindwarePremium.showToast(`${title} download started`, 'info');
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();