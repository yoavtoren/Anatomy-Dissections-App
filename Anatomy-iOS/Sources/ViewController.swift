import UIKit
import WebKit

final class ViewController: UIViewController {

    private var webView: WKWebView!

    override func viewDidLoad() {
        super.viewDidLoad()
        setupWebView()
        loadContent()
    }

    // MARK: - Setup

    private func setupWebView() {
        let config = WKWebViewConfiguration()
        config.allowsInlineMediaPlayback = true
        config.mediaTypesRequiringUserActionForPlayback = []

        webView = WKWebView(frame: .zero, configuration: config)
        webView.translatesAutoresizingMaskIntoConstraints = false
        // Let the web content manage all insets via CSS env(safe-area-inset-*)
        webView.scrollView.contentInsetAdjustmentBehavior = .never
        webView.scrollView.bounces = true
        webView.isOpaque = false
        webView.backgroundColor = UIColor(red: 1, green: 0.992, blue: 0.976, alpha: 1) // #FFFDF9

        view.backgroundColor = UIColor(red: 1, green: 0.992, blue: 0.976, alpha: 1)
        view.addSubview(webView)

        NSLayoutConstraint.activate([
            webView.topAnchor.constraint(equalTo: view.topAnchor),
            webView.leadingAnchor.constraint(equalTo: view.leadingAnchor),
            webView.trailingAnchor.constraint(equalTo: view.trailingAnchor),
            webView.bottomAnchor.constraint(equalTo: view.bottomAnchor),
        ])
    }

    private func loadContent() {
        // index.html and images/ are bundled at the root; images/ is a folder reference.
        guard let url = Bundle.main.url(forResource: "index", withExtension: "html") else {
            assertionFailure("index.html missing from bundle — add it as a resource in Xcode.")
            return
        }
        // Allow WKWebView to read any file under the bundle directory (needed for images/).
        webView.loadFileURL(url, allowingReadAccessTo: url.deletingLastPathComponent())
    }

    // MARK: - Status bar

    override var prefersStatusBarHidden: Bool { false }
    override var preferredStatusBarStyle: UIStatusBarStyle { .darkContent }
}
