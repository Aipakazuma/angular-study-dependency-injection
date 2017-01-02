# What is it?

Angular study Dependency injection.

# Dependency Injection

ng-book2の超訳

プログラムって、大きくなるとモジュールから別のモジュールのプログラムを呼びますよね。例えばAのプログラムからBを呼び出すとか。

この時、BはAの依存したといいます。

多くの場合、普通にimportを使えばおｋですが、依存関係を洗練された方法で提供する必要があります。

* テスト中にMockBの実装を置き換えたい
* Bクラスをシングルトンでシェアしたい
* Bクラスを使う度に、新しいインスンタンスを生成したい。要はファクトリーパターン。

Dependency Injectionはこれらを解決することができます。ながいからDIって呼んでいい？

DIはプログラムの一部を他のプログラムからアクセスできるようにする機能？システムです。なんのこっちゃ。

DIのメリットは、クライアントのコンポーネントは依存関係を作成する方法を意識する必要がない。

うむ。まずはコードを書こう。


# Study English

* in many cases
    * 多くの場合
* sufficient
    * 十分
* sophisticated
    * 洗練された
* substitute out 
    * 代用、置き換える
* benefit
    * メリット、利点
* rely
    * 頼りにする
* brittle
    * 脆い
* with that
    * それと、
* tweak
    * 微調整
* slightly
    * わずかに
* rid
    * 除去する
* isolation
    * 隔離
* predictable
    * 予測可能
* principle
    * 原理、原則
* aware
    * 承知
* setback
    * 後退
* boundaries
    * 境界
* upon
    * 〜に
* propagate
    * 伝播する
* In other words,
    * 言い換えると
* towards
    * 向かって
* affects
    * 影響を与える
* as long as
    * 限り
* altogether
    * 全部
* realize
    * 実現する
* Traditionally
    * 伝統的に
* implies
    * ほのめかす
* therefor
    * そのため
* across
    * 横切る
* newly
    * あたらしく
*
