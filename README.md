ㅈㅂ 개발자의 리액트 네이티브 도전기

installation
===============

환경: Ubuntu 16.04 LTS
IDE: WebStorm 2016.2.4
대상OS: Android

[요기](https://facebook.github.io/react-native/docs/getting-started.html) 보고 함.

역시나 안됨
========

시키는 대로 하고

<pre><code>react-native run-android</code></pre>

누르고 익숙하게 보던 안드로이드 빌드가 끝나면..

<p>
    <img width="300px" src="./images/readme/couldnotgetbatchbridge.png"></img>
</p>

행여나 하는 마음에 RELOAD(R,R)을 눌러보지만

<p>
    <img width="300px" src="./images/readme/couldnotconnecttodevelopmentserver.png"></img>
</p>

삽질 시작
=======

패키징 서버 ...
----------

첫번째로 MAC 에서는

<pre><code>react-native run-android</code></pre>

코드를 실행하면 자동으로 패키징 서버를 띄워준다. 하지만 우분투에서는

<pre><code>Starting JS server...
Running /home/harry/Android/Sdk/platform-tools/adb -s 43008f214c953133 reverse tcp:8081 tcp:8081
Building and installing the app on the device (cd android && ./gradlew installDebug...</code></pre>

라고 뜨지만 실제론 실행되지 않는다.

<pre><code>react-native start</code></pre>

백그라운드로 돌리고 싶다면

<pre><code>react-native start &</code></pre>

해주고 시작하면...

<p>
    <img width="300px" src="./images/readme/couldnotgetbatchbridge.png"></img>
</p>

adb ...
---------

빌드 중,

<pre><code>adb server version(32) doesn't match this client (36) killing...</code></pre>

과 같은 에러가 뜬다.

구글링을 통해 안드로이드 스튜디오의 SDK Manager 를 통해 최신 build tool 로 업그레이드... 해도 마찬가지.

이유는 실제 

<pre><code>~/Android/Sdk/platform-tools/adb</code></pre>

를 봐야되는데

<pre><code>~/usr/bin/adb</code></pre>

를 보고 있고, 얘가 버전이 낮다는 것이다.

간단하게 심벌릭 링크로 이어주거나, 그냥 adb 파일을 복사해도 무관하다.




