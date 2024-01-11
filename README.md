# 都道府県別総人口推移グラフ

都道府県別の総人口推移を表示するシングルページアプリケーションです。このプロジェクトは[株式会社ゆめみ](https://www.yumemi.co.jp/)のフロントエンド開発課題として作成しました。

## デモ
[作成したアプリケーション](https://prefecture-population-dashboard.vercel.app/)をVercel上にデプロイしました。
![Demo_picture](https://github.com/toshiki-git/prefecture-population-dashboard/assets/134392452/64cb250b-2168-4ebe-bc7c-679deaca54ae)



## 機能

- RESAS APIから都道府県一覧を取得し、チェックボックスと一緒に表示。
- 選択された都道府県の人口構成データをグラフで表示
- 総人口、年少人口、生産年齢人口、老年人口の各カテゴリをグラフで切り替え表示

## 技術スタック

- Next.js (app router)
- TypeScript
- Highcharts
- ESLint / Prettier / Husky
- Jest

## セットアップ

このプロジェクトをローカル環境で実行するには、以下の手順に従ってください。

### 必要条件

- Node.jsがインストールされていること（[Node.js公式サイト](https://nodejs.org/)よりインストール）
- npmがインストールされていること（Node.jsをインストールすると一緒にインストールされます）

### ステップ1: リポジトリのクローン

最初に、GitHubからこのリポジトリをクローンします。

```bash
git clone https://github.com/toshiki-git/prefecture-population-dashboard.git
cd prefecture-population-dashboard
```

### ステップ2: 依存関係のインストール

次に、プロジェクトのルートディレクトリでnpmを使用して依存関係をインストールします。

```bash
npm install
```

### ステップ3: RESAS APIのキーを取得

RESAS APIを使用するためには、RESAS APIのウェブサイトでアカウントを作成し、APIキーを取得する必要があります。

- RESAS APIのウェブサイト（[RESAS API](https://opendata.resas-portal.go.jp/)）にアクセスし、アカウントを登録します。
- アカウントを作成したら、APIキーを発行します。

### ステップ4: 環境変数の設定

プロジェクトのルートに`.env.local`ファイルを作成し、次のようにRESAS APIキーを設定します。

```env
NEXT_PUBLIC_RESAS_API_KEY=あなたのRESAS_APIキー
```

このファイルには、あなたがRESAS APIから取得したAPIキーを代入します。

### ステップ5: アプリケーションの起動

以下のコマンドを実行して、アプリケーションを起動します。

```bash
npm run dev
```

これでアプリケーションがローカルサーバーで起動し、ブラウザで`http://localhost:3000`（または別の指定されたポート）にアクセスすることで表示されます。
