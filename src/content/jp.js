export default {
  hero: {
    greeting: "こんにちは、",
    name: "トゥシャール・ガーグ",
    headline: "ソフトウェアエンジニア",
    subline: "製造、環境分析、金融、バイオインフォマティクスの分野でデプロイされた、本番環境向けソフトウェアシステム、スケーラブルなバックエンドサービス、AIアプリケーションの開発。",
    availability: "現在、ソフトウェアエンジニア、バックエンド、フルスタック、日本国内の機会を探しています。",
    stats: ["4件の本番プロジェクト", "3つのライブデプロイ", "NAT-Test N3", "AWS & Docker"],
    roles: ["バックエンド開発者", "フルスタック開発者", "クラウドエンジニア", "AIアプリケーションエンジニア"],
    description: "金融、製造、環境分析、バイオインフォマティクスの分野でソリューションを構築しました。",
    buttons: {
      viewProjects: "プロジェクトを見る",
      downloadResume: "履歴書をダウンロード",
      contactMe: "お問い合わせ"
    },
    technologies: ["Python", "FastAPI", "React", "TypeScript", "PostgreSQL", "AWS", "Docker"],
    cards: {
      focus: {
        title: "フォーカス",
        text: "実用的な機械学習、分析ワークフロー、そして実利的なエンジニアリング。"
      },
      domains: {
        title: "専門分野",
        text: "製造業AI、環境データ、バイオインフォマティクス、フルスタック。"
      }
    },
    systemStatus: {
      title: "システム状態",
      deployed: "ソフトウェアシステム稼働中",
      activeProjects: "稼働中プロジェクト：4件",
      focus: "フォーカス：本番環境向けエンジニアリング"
    }
  },
  about: {
    heading: "自己紹介",
    subtitle: "バックエンドシステム、クラウドネイティブアプリケーション、AI活用製品を中心に開発するソフトウェアエンジニア。",
    paragraphs: [
      "バックエンドシステム、クラウドネイティブアプリケーション、AI活用製品を中心に開発するソフトウェアエンジニアです。",
      "金融、製造、環境分析、バイオインフォマティクスといった複数の分野でソリューションを構築してきました。",
      "システム設計からバックエンドアーキテクチャ、デプロイ、最適化まで、開発ライフサイクル全体を経験しています。"
    ],
    education: {
      title: "学歴",
      items: [
        {
          degree: "バイオテクノロジー学士",
          institution: "アミティ大学 ノイダ校",
          duration: "2022〜2026年",
          score: "GPA：8.6"
        },
        {
          degree: "CBSE第12学年",
          institution: "DL DAV モデルスクール",
          score: "89.7%"
        }
      ]
    }
  },
  whatIBuild: {
    heading: "開発分野",
    subtitle: "バックエンドエンジニアリング、製造自動化、環境分析、金融、バイオインフォマティクスの分野でデプロイされた本番環境向けソフトウェアシステム。",
    items: [
      { id: "backend-systems", title: "バックエンドシステム", tech: ["FastAPIサービス", "REST API", "認証", "データベース設計", "バックエンドアーキテクチャ"] },
      { id: "full-stack-applications", title: "フルスタックアプリケーション", tech: ["React", "TypeScript", "PostgreSQL", "クラウドデプロイ", "エンドツーエンド開発"] },
      { id: "ai-powered-products", title: "AI活用製品", tech: ["説明可能AI", "コンピュータビジョン", "予測分析", "意思決定支援システム"] },
      { id: "cloud-deployment", title: "クラウド & デプロイ", tech: ["Docker", "AWS", "CI/CD", "本番環境ホスティング"] }
    ]
  },
  skills: [
    {
      id: "software-engineering",
      category: "ソフトウェアエンジニアリング",
      items: ["Python", "TypeScript", "Git", "GitHub", "システム設計"]
    },
    {
      id: "backend-development",
      category: "バックエンド開発",
      items: ["FastAPI", "REST API", "PostgreSQL", "MySQL", "API設計", "認証"]
    },
    {
      id: "frontend-development",
      category: "フロントエンド開発",
      items: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3"]
    },
    {
      id: "cloud-devops",
      category: "クラウド・DevOps",
      items: ["AWS", "Docker", "CI/CD", "GitHub Actions", "Nginx", "コンテナ化"]
    },
    {
      id: "data-engineering",
      category: "データエンジニアリング・分析",
      items: ["Pandas", "NumPy", "データパイプライン", "データ分析", "統計分析"]
    },
    {
      id: "ai-ml",
      category: "AI・機械学習",
      items: ["XGBoost", "SHAP", "コンピュータビジョン", "TensorFlow", "Scikit-Learn"]
    },
    {
      id: "bioinformatics",
      category: "バイオインフォマティクス",
      items: ["Biopython", "BLAST", "計算ゲノミクス", "ゲノムデータ分析"]
    }
  ],
  projects: [
    {
      id: "finkizuna",
      title: "FinKizuna ERP",
      description: "構築・デプロイした、ワークフロー自動化、不正検知、ロールベースのアクセス制御、クラウドデプロイを備えたマルチテナントSaaS ERPプラットフォーム。",
      impact: "説明可能AIを用いて94%の不正検知精度を実現。",
      technologies: ["FastAPI", "PostgreSQL", "AWS", "Docker", "CI/CD", "React", "TypeScript"],
      githubUrl: "https://github.com/TusharGarg07",
      liveUrl: "https://fin-kizuna-erp-i5o9.vercel.app/"
    },
    {
      id: "veritas",
      title: "VERITAS 環境インテリジェンスプラットフォーム",
      description: "11,000件以上の環境データを分析し、リアルタイム室内空気質モニタリング、リスク評価、自動レポート生成を行う環境リスク知能プラットフォーム「VERITAS」を構築・デプロイ。",
      impact: "11,000件以上の環境データを分析し、自動リスクレポートを生成。",
      technologies: ["Python", "FastAPI", "XGBoost", "SHAP", "Pandas", "Docker"],
      githubUrl: "https://github.com/TusharGarg07/VERITAS",
      liveUrl: "https://veritas-ai-system.onrender.com/"
    },
    {
      id: "zenkensa",
      title: "ZenKensa 製造検査システム",
      description: "製造品質自動検査のためのコンピュータビジョンソリューションを構築・デプロイ。",
      impact: "AI支援の欠陥検出により手作業による検査への依存を軽減。",
      technologies: ["TensorFlow Lite", "Python", "Computer Vision", "FastAPI"],
      githubUrl: "https://github.com/TusharGarg07/ZenKensa",
      liveUrl: "https://zenkensa-ai.onrender.com"
    },
    {
      id: "hiv-drug-resistance",
      title: "説明可能HIV薬剤耐性予測",
      description: "透明なモデル解釈を備えたHIV薬剤耐性予測の説明可能機械学習プラットフォームを構築・デプロイ。",
      impact: "SHAPを用いてゲノム予測モデルの解釈性を向上。",
      technologies: ["Python", "Machine Learning", "Bioinformatics", "SHAP"],
      githubUrl: "https://github.com/TusharGarg07/HIV-Drug-Resistance",
      liveUrl: "https://explainable-hiv-drug-resistance-system.onrender.com"
    }
  ],
  projectButtons: {
    liveDemo: "デモを見る →",
    github: "GitHub"
  },
  experience: {
    heading: "職歴",
    subtitle: "製造、環境分析、産業分野にわたるソフトウェアシステム、バックエンドサービス、データ駆動型アプリケーションの構築に関する実務経験。",
    items: [
      {
        id: "zenkensa",
        role: "ソフトウェア・製造システム インターン",
        company: "ZenKensa（製造検査システム）",
        duration: "2025年12月 – 2026年5月",
        points: [
          "AI支援製造検査システム向けのソフトウェアコンポーネントを開発・支援しました。",
          "コンピュータビジョンパイプラインを実装し、製造検査タスクの推論ワークフローを最適化しました。",
          "ワークフロー自動化および意思決定支援システムの設計に貢献しました。"
        ]
      },
      {
        id: "anant-raj",
        role: "ソフトウェアエンジニアリング インターン",
        company: "アナント・ラージ・クラウド株式会社",
        duration: "2024年5月 ～ 2025年6月",
        points: [
          "11,000件以上の環境データを分析し、リアルタイム室内空気質モニタリングとリスク評価を行う環境リスク知能プラットフォーム「VERITAS」を構築しました。",
          "PandasおよびNumPyを用いた多パラメータセンサデータの処理パイプラインを設計しました。",
          "リスクスコアリングアルゴリズム、可視化、自動レポート生成ワークフローを実装しました。",
          "環境健康判断支援のためのバックエンドサービスおよびダッシュボードを開発しました。"
        ]
      }
    ]
  },
  certifications: [
    {
      id: "nat-test-n3",
      title: "NAT-Test N3",
      issuer: "日本語能力認定",
      year: "2026"
    },
    {
      id: "jlpt-n5",
      title: "JLPT N5",
      issuer: "日本語能力試験",
      year: "2025"
    },
    {
      id: "python-data-science",
      title: "Pythonによるデータサイエンス",
      issuer: "NPTEL",
      year: "2025"
    },
    {
      id: "microsoft-tech",
      title: "Microsoft関連資格",
      issuer: "Microsoft",
      year: "2024"
    },
    {
      id: "data-analysis-excel-udemy",
      title: "データ分析・Excel",
      issuer: "Udemy",
      year: "2024"
    },
    {
      id: "ai-ml-core",
      title: "AI・機械学習コア",
      issuer: "認定プログラム",
      year: "2024"
    },
    {
      id: "full-stack-web",
      title: "フルスタックWeb開発",
      issuer: "認定プログラム",
      year: "2024"
    }
  ],
  languages: [
    {
      name: "英語",
      level: "ビジネスレベル"
    },
    {
      name: "ヒンディー語",
      level: "母語"
    },
    {
      name: "日本語",
      level: "NAT N3 取得 | JLPT N2 準備中"
    },
    {
      name: "ロシア語",
      level: "初級（A1）"
    }
  ],
  skillsSubtitle: "ソフトウェアエンジニアリング、バックエンド開発、クラウド技術、データ分析、AI活用アプリケーションに関する専門知識。",
  contact: {
    heading: "お問い合わせ",
    message: "ご興味をお持ちいただけましたら、お気軽にご連絡ください。",
    closing: "ソフトウェアエンジニア、バックエンド開発、フルスタック開発、クラウドエンジニアリング、AIアプリケーション、フリーランス、国際的な機会を受け付けています。"
  }
}
