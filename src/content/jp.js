export default {
  hero: {
    greeting: "こんにちは、",
    name: "トゥシャール・ガーグ",
    headline: "製造業および環境分野向けのAIシステムを設計・開発しています",
    subline: "AI・データ分析インターン | フルスタック開発 | バイオインフォマティクス専攻",
    availability: "現在、AI・データ・産業技術分野での機会を探しています。",
    stats: ["4件以上のプロジェクト", "2回のインターン", "JLPT N3", "5言語対応"],
    roles: ["AIエンジニア", "データアナリスト", "フルスタック開発者", "製造AI専門家"],
    description: "製造業検査・環境分析・実データ活用に向けた、AIシステムの開発に取り組んでいます。",
    buttons: {
      viewProjects: "プロジェクトを見る",
      downloadResume: "履歴書をダウンロード",
      contactMe: "お問い合わせ"
    },
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
      deployed: "AIシステム稼働中",
      activeProjects: "稼働中プロジェクト：4件",
      focus: "フォーカス：産業・環境AI"
    }
  },
  about: {
    heading: "自己紹介",
    subtitle: "AIとデータ分析における専門的な紹介と経歴。",
    paragraphs: [
      "私はバイオテクノロジーを専攻しながら、AIおよびデータ分析分野に取り組んでいます。",
      "製造業向けの外観検査システムや、室内環境リスク分析プラットフォームの開発に携わりました。",
      "Pythonや機械学習、フルスタック開発技術を活用し、実環境で安定して動作するAIシステムの設計に取り組んでいます。",
      "将来的には、日本において産業および環境分野のAI開発に貢献できるエンジニアとして成長したいと考えています。"
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
  skills: [
    {
      id: "ai-ml",
      category: "AI・機械学習",
      items: ["Python", "機械学習", "コンピュータビジョン", "TensorFlow", "予測モデル"]
    },
    {
      id: "data-analysis",
      category: "データ分析",
      items: ["統計分析", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      id: "full-stack",
      category: "フルスタック開発",
      items: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "FastAPI", "REST API"]
    },
    {
      id: "cloud-devops",
      category: "クラウド・DevOps",
      items: ["AWS（EC2・RDS・S3）", "Docker", "GitHub Actions", "CI/CD", "Nginx"]
    },
    {
      id: "bioinformatics",
      category: "バイオインフォマティクス",
      items: ["BLAST", "Biopython", "計算ゲノミクス"]
    },
    {
      id: "tools-platforms",
      category: "開発ツール・環境",
      items: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "MySQL", "SQLite"]
    }
  ],
  projects: [
    {
      id: "zenkensa",
      title: "金属表面検査向けAI支援システム",
      description: "コンピュータビジョンおよび軽量な機械学習モデルを活用し、製造業向けの検査支援システムを開発しました。",
      impact: "検査工程の効率化および品質判断の支援を目的としています。",
      technologies: ["Python", "Computer Vision", "TensorFlow Lite", "FastAPI"],
      githubUrl: "https://github.com/TusharGarg07/ZenKensa"
    },
    {
      id: "finkizuna",
      title: "FinKizuna ERP – AI搭載ERPシステム",
      description: "Isolation ForestとSHAPを用いた不正検知（精度約94%）を実装した、マルチテナント対応の本番グレードSaaS ERPシステム。稟議ワークフローの自動化とリアルタイム意思決定支援を実現。CI/CD・Nginx・Dockerで展開。",
      impact: "不正検知精度 約94%",
      technologies: ["FastAPI", "PostgreSQL", "AWS", "Docker", "CI/CD", "Isolation Forest"],
      githubUrl: "https://github.com/TusharGarg07"
    },
    {
      id: "veritas",
      title: "VERITAS – AI室内環境リスク知能システム",
      description: "複数パラメータのセンサデータを分析するAI駆動の室内空気質モニタリングシステム。データパイプライン・リスクスコアリング・ダッシュボードを実装。",
      impact: "リアルタイムの複数パラメータリスクスコアリング",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "FastAPI"],
      githubUrl: "https://github.com/TusharGarg07/VERITAS"
    },
    {
      id: "hiv-drug-resistance",
      title: "説明可能なHIV薬剤耐性予測システム",
      description: "ゲノムデータを用いたHIV薬剤耐性予測のMLシステム。SHAP説明可能性を統合し、医療意思決定の透明性を向上。",
      impact: "医療AIにおけるSHAP説明可能性の統合",
      technologies: ["Python", "Machine Learning", "SHAP", "Bioinformatics", "FastAPI"],
      githubUrl: "https://github.com/TusharGarg07/HIV-Drug-Resistance"
    }
  ],
  experience: {
    heading: "職歴",
    subtitle: "AI・製造業検査・環境分析における実務インターンシップ経験。",
    items: [
      {
        id: "zenkensa",
        role: "AI／製造システム インターン",
        company: "ZenKensa（製造検査システム）",
        duration: "2025年12月 – 現在",
        points: [
          "金属表面検査向けAI支援システムの開発プロジェクトに参加しました。",
          "コンピュータビジョンおよび軽量機械学習モデルの実装を担当しました。",
          "検査工程の自動化および品質判断支援の設計に取り組みました。"
        ]
      },
      {
        id: "anant-raj",
        role: "IT・データ解析インターン",
        company: "アナント・ラージ・クラウド株式会社",
        duration: "2024年5月 ～ 2025年6月",
        points: [
          "AIによる室内空気質モニタリングシステム「VERITAS」の開発に携わりました。",
          "PandasおよびNumPyを用いた多パラメータセンサデータの処理パイプラインを設計しました。",
          "リスクスコアリングアルゴリズム・可視化・レポート生成ワークフローを実装しました。",
          "環境健康判断支援のためのバックエンドサービスおよびダッシュボード開発に貢献しました。"
        ]
      }
    ]
  },
  certifications: [
    {
      id: "jlpt-n5",
      title: "日本語能力試験（JLPT）N5（2025年）"
    },
    {
      id: "nat-test-n3",
      title: "NAT-TEST N3取得（2026年）"
    },
    {
      id: "microsoft-tech",
      title: "Microsoft関連資格（2024年）"
    },
    {
      id: "data-analysis-excel-udemy",
      title: "データ分析・Excel関連資格 – Udemy（2024年）"
    },
    {
      id: "ai-ml-core",
      title: "AI・機械学習講座修了"
    },
    {
      id: "python-data-science",
      title: "Pythonによるデータサイエンス（NPTEL修了）"
    },
    {
      id: "full-stack-web",
      title: "フルスタックWeb開発コース修了"
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
      level: "JLPT N3（業務における基本的なコミュニケーションが可能）"
    },
    {
      name: "ロシア語",
      level: "初級（A1）"
    }
  ],
  contact: {
    heading: "お問い合わせ",
    message: "ご興味をお持ちいただけましたら、お気軽にご連絡ください。",
    closing: "AI・データ・産業技術分野での協業の機会がございましたら、ぜひご連絡ください。"
  }
}
