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
