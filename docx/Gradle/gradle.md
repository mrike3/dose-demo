# Gradle国内镜像配置
在<code>setings.gradle.kts</code>文件中添加如下代码
## 插件仓库配置
```kotlin
pluginManagement {
    repositories {
        // 腾讯云镜像
        maven ("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/")

        // 阿里云镜像（插件）
        maven ("https://maven.aliyun.com/repository/public")
        maven ("https://maven.aliyun.com/repository/google")
        maven ("https://maven.aliyun.com/repository/gradle-plugin")

        // 备用官方源
        google {
            content {
                includeGroupByRegex("com\\.android.*")
                includeGroupByRegex("com\\.google.*")
                includeGroupByRegex("androidx.*")
            }
        }
        mavenCentral()
        gradlePluginPortal()
    }
}
```
## 仓库配置
```kotlin
dependencyResolutionManagement {
    repositories {
        // 腾讯云镜像
        maven ("https://mirrors.cloud.tencent.com/nexus/repository/maven-public/")
        // 阿里云镜像（依赖库）
        maven ("https://maven.aliyun.com/repository/public")
        maven ("https://maven.aliyun.com/repository/google")
        // 华为云镜像
        maven ("https://repo.huaweicloud.com/repository/maven/")

        google()
        mavenCentral()
    }
}
```
::: warning
上面的镜像配置有Google的，主要是配置安卓项目的，只是做java语言的项目，可以去除
:::