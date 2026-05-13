/**
          }

          .bottom-cta-band a {
            width: 100%;
            min-width: 0;
          }
        }

        @media (max-width: 900px) {
          .remote-page-shell {
            margin: 16px auto 0;
            padding: 16px;
            max-width: calc(100% - 24px);
          }

          .remote-header {
            flex-wrap: wrap;
            justify-content: center;
            gap: 14px;
            text-align: center;
          }

          .remote-nav {
            width: 100%;
            flex-wrap: wrap;
            justify-content: center;
            gap: 12px 18px;
          }

          .remote-header-cta {
            width: 100%;
            max-width: 340px;
          }

          .hero-copy-panel,
          .editorial-section,
          .meeting-window-section,
          .bottom-cta-band {
            padding: 26px;
          }

          .hero-copy-panel h1,
          .editorial-copy h2,
          .workflow-header h2,
          .meeting-window-header h2,
          .bottom-cta-band h2 {
            font-size: 42px;
          }

          .timezone-overlay-card {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 560px) {
          .hero-copy-panel,
          .editorial-section,
          .meeting-window-section,
          .bottom-cta-band {
            padding: 22px;
          }

          .hero-copy-panel h1,
          .editorial-copy h2,
          .workflow-header h2,
          .meeting-window-header h2,
          .bottom-cta-band h2 {
            font-size: 34px;
          }

          .hero-intro,
          .editorial-copy p,
          .workflow-card p,
          .meeting-window-card p,
          .bottom-cta-band span {
            font-size: 15px;
          }

          .workflow-card h3 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}
