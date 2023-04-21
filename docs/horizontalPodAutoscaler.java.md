# `kubernetes_horizontal_pod_autoscaler`

Refer to the Terraform Registory for docs: [`kubernetes_horizontal_pod_autoscaler`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler).

# `horizontalPodAutoscaler` Submodule <a name="`horizontalPodAutoscaler` Submodule" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizontalPodAutoscaler <a name="HorizontalPodAutoscaler" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler kubernetes_horizontal_pod_autoscaler}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscaler;

HorizontalPodAutoscaler.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(HorizontalPodAutoscalerMetadata)
    .spec(HorizontalPodAutoscalerSpec)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#id HorizontalPodAutoscaler#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#metadata HorizontalPodAutoscaler#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#spec HorizontalPodAutoscaler#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#id HorizontalPodAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putMetadata"></a>

```java
public void putMetadata(HorizontalPodAutoscalerMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putSpec"></a>

```java
public void putSpec(HorizontalPodAutoscalerSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscaler;

HorizontalPodAutoscaler.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscaler;

HorizontalPodAutoscaler.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscaler;

HorizontalPodAutoscaler.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference">HorizontalPodAutoscalerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference">HorizontalPodAutoscalerSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.metadata"></a>

```java
public HorizontalPodAutoscalerMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference">HorizontalPodAutoscalerMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.spec"></a>

```java
public HorizontalPodAutoscalerSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference">HorizontalPodAutoscalerSpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.metadataInput"></a>

```java
public HorizontalPodAutoscalerMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.specInput"></a>

```java
public HorizontalPodAutoscalerSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscaler.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HorizontalPodAutoscalerConfig <a name="HorizontalPodAutoscalerConfig" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerConfig;

HorizontalPodAutoscalerConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(HorizontalPodAutoscalerMetadata)
    .spec(HorizontalPodAutoscalerSpec)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#id HorizontalPodAutoscaler#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.metadata"></a>

```java
public HorizontalPodAutoscalerMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#metadata HorizontalPodAutoscaler#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.spec"></a>

```java
public HorizontalPodAutoscalerSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#spec HorizontalPodAutoscaler#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#id HorizontalPodAutoscaler#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HorizontalPodAutoscalerMetadata <a name="HorizontalPodAutoscalerMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerMetadata;

HorizontalPodAutoscalerMetadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .generateName(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the horizontal pod autoscaler must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#annotations HorizontalPodAutoscaler#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#generate_name HorizontalPodAutoscaler#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#labels HorizontalPodAutoscaler#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the horizontal pod autoscaler must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#namespace HorizontalPodAutoscaler#namespace}

---

### HorizontalPodAutoscalerSpec <a name="HorizontalPodAutoscalerSpec" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpec;

HorizontalPodAutoscalerSpec.builder()
    .maxReplicas(java.lang.Number)
    .scaleTargetRef(HorizontalPodAutoscalerSpecScaleTargetRef)
//  .behavior(HorizontalPodAutoscalerSpecBehavior)
//  .metric(IResolvable)
//  .metric(java.util.List<HorizontalPodAutoscalerSpecMetric>)
//  .minReplicas(java.lang.Number)
//  .targetCpuUtilizationPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | Upper limit for the number of pods that can be set by the autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.scaleTargetRef">scaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a></code> | scale_target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.behavior">behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a></code> | behavior block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.metric">metric</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric">HorizontalPodAutoscalerSpecMetric</a>></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.targetCpuUtilizationPercentage">targetCpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

Upper limit for the number of pods that can be set by the autoscaler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#max_replicas HorizontalPodAutoscaler#max_replicas}

---

##### `scaleTargetRef`<sup>Required</sup> <a name="scaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.scaleTargetRef"></a>

```java
public HorizontalPodAutoscalerSpecScaleTargetRef getScaleTargetRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a>

scale_target_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#scale_target_ref HorizontalPodAutoscaler#scale_target_ref}

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.behavior"></a>

```java
public HorizontalPodAutoscalerSpecBehavior getBehavior();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a>

behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#behavior HorizontalPodAutoscaler#behavior}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.metric"></a>

```java
public java.lang.Object getMetric();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric">HorizontalPodAutoscalerSpecMetric</a>>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}

---

##### `minReplicas`<sup>Optional</sup> <a name="minReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#min_replicas HorizontalPodAutoscaler#min_replicas}

---

##### `targetCpuUtilizationPercentage`<sup>Optional</sup> <a name="targetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec.property.targetCpuUtilizationPercentage"></a>

```java
public java.lang.Number getTargetCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

Target average CPU utilization (represented as a percentage of requested CPU) over all the pods.

If not specified the default autoscaling policy will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#target_cpu_utilization_percentage HorizontalPodAutoscaler#target_cpu_utilization_percentage}

---

### HorizontalPodAutoscalerSpecBehavior <a name="HorizontalPodAutoscalerSpecBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehavior;

HorizontalPodAutoscalerSpecBehavior.builder()
//  .scaleDown(IResolvable)
//  .scaleDown(java.util.List<HorizontalPodAutoscalerSpecBehaviorScaleDown>)
//  .scaleUp(IResolvable)
//  .scaleUp(java.util.List<HorizontalPodAutoscalerSpecBehaviorScaleUp>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.property.scaleDown">scaleDown</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown">HorizontalPodAutoscalerSpecBehaviorScaleDown</a>></code> | scale_down block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.property.scaleUp">scaleUp</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp">HorizontalPodAutoscalerSpecBehaviorScaleUp</a>></code> | scale_up block. |

---

##### `scaleDown`<sup>Optional</sup> <a name="scaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.property.scaleDown"></a>

```java
public java.lang.Object getScaleDown();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown">HorizontalPodAutoscalerSpecBehaviorScaleDown</a>>

scale_down block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#scale_down HorizontalPodAutoscaler#scale_down}

---

##### `scaleUp`<sup>Optional</sup> <a name="scaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior.property.scaleUp"></a>

```java
public java.lang.Object getScaleUp();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp">HorizontalPodAutoscalerSpecBehaviorScaleUp</a>>

scale_up block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#scale_up HorizontalPodAutoscaler#scale_up}

---

### HorizontalPodAutoscalerSpecBehaviorScaleDown <a name="HorizontalPodAutoscalerSpecBehaviorScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown;

HorizontalPodAutoscalerSpecBehaviorScaleDown.builder()
    .policy(IResolvable)
    .policy(java.util.List<HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy>)
//  .selectPolicy(java.lang.String)
//  .stabilizationWindowSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy</a>></code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.selectPolicy">selectPolicy</a></code> | <code>java.lang.String</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.stabilizationWindowSeconds">stabilizationWindowSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.policy"></a>

```java
public java.lang.Object getPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy</a>>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#policy HorizontalPodAutoscaler#policy}

---

##### `selectPolicy`<sup>Optional</sup> <a name="selectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.selectPolicy"></a>

```java
public java.lang.String getSelectPolicy();
```

- *Type:* java.lang.String

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#select_policy HorizontalPodAutoscaler#select_policy}

---

##### `stabilizationWindowSeconds`<sup>Optional</sup> <a name="stabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown.property.stabilizationWindowSeconds"></a>

```java
public java.lang.Number getStabilizationWindowSeconds();
```

- *Type:* java.lang.Number

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#stabilization_window_seconds HorizontalPodAutoscaler#stabilization_window_seconds}

---

### HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy;

HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.builder()
    .periodSeconds(java.lang.Number)
    .type(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.type">type</a></code> | <code>java.lang.String</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.value">value</a></code> | <code>java.lang.Number</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#period_seconds HorizontalPodAutoscaler#period_seconds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecBehaviorScaleUp <a name="HorizontalPodAutoscalerSpecBehaviorScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp;

HorizontalPodAutoscalerSpecBehaviorScaleUp.builder()
    .policy(IResolvable)
    .policy(java.util.List<HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy>)
//  .selectPolicy(java.lang.String)
//  .stabilizationWindowSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy</a>></code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.selectPolicy">selectPolicy</a></code> | <code>java.lang.String</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.stabilizationWindowSeconds">stabilizationWindowSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.policy"></a>

```java
public java.lang.Object getPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy</a>>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#policy HorizontalPodAutoscaler#policy}

---

##### `selectPolicy`<sup>Optional</sup> <a name="selectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.selectPolicy"></a>

```java
public java.lang.String getSelectPolicy();
```

- *Type:* java.lang.String

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#select_policy HorizontalPodAutoscaler#select_policy}

---

##### `stabilizationWindowSeconds`<sup>Optional</sup> <a name="stabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp.property.stabilizationWindowSeconds"></a>

```java
public java.lang.Number getStabilizationWindowSeconds();
```

- *Type:* java.lang.Number

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#stabilization_window_seconds HorizontalPodAutoscaler#stabilization_window_seconds}

---

### HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy;

HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.builder()
    .periodSeconds(java.lang.Number)
    .type(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.type">type</a></code> | <code>java.lang.String</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.value">value</a></code> | <code>java.lang.Number</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#period_seconds HorizontalPodAutoscaler#period_seconds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetric <a name="HorizontalPodAutoscalerSpecMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetric;

HorizontalPodAutoscalerSpecMetric.builder()
    .type(java.lang.String)
//  .containerResource(HorizontalPodAutoscalerSpecMetricContainerResource)
//  .external(HorizontalPodAutoscalerSpecMetricExternal)
//  .object(HorizontalPodAutoscalerSpecMetricObject)
//  .pods(HorizontalPodAutoscalerSpecMetricPods)
//  .resource(HorizontalPodAutoscalerSpecMetricResource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.type">type</a></code> | <code>java.lang.String</code> | type is the type of metric source. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.containerResource">containerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a></code> | container_resource block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.external">external</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a></code> | external block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.object">object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a></code> | object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.pods">pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a></code> | pods block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a></code> | resource block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type is the type of metric source.

It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `containerResource`<sup>Optional</sup> <a name="containerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.containerResource"></a>

```java
public HorizontalPodAutoscalerSpecMetricContainerResource getContainerResource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a>

container_resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#container_resource HorizontalPodAutoscaler#container_resource}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.external"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternal getExternal();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a>

external block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#external HorizontalPodAutoscaler#external}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.object"></a>

```java
public HorizontalPodAutoscalerSpecMetricObject getObject();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a>

object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#object HorizontalPodAutoscaler#object}

---

##### `pods`<sup>Optional</sup> <a name="pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.pods"></a>

```java
public HorizontalPodAutoscalerSpecMetricPods getPods();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a>

pods block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#pods HorizontalPodAutoscaler#pods}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric.property.resource"></a>

```java
public HorizontalPodAutoscalerSpecMetricResource getResource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a>

resource block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#resource HorizontalPodAutoscaler#resource}

---

### HorizontalPodAutoscalerSpecMetricContainerResource <a name="HorizontalPodAutoscalerSpecMetricContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricContainerResource;

HorizontalPodAutoscalerSpecMetricContainerResource.builder()
    .container(java.lang.String)
    .name(java.lang.String)
//  .target(HorizontalPodAutoscalerSpecMetricContainerResourceTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.container">container</a></code> | <code>java.lang.String</code> | name of the container in the pods of the scaling target. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.name">name</a></code> | <code>java.lang.String</code> | name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a></code> | target block. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

name of the container in the pods of the scaling target.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#container HorizontalPodAutoscaler#container}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name of the resource in question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricContainerResourceTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricContainerResourceTarget <a name="HorizontalPodAutoscalerSpecMetricContainerResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget;

HorizontalPodAutoscalerSpecMetricContainerResourceTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetricExternal <a name="HorizontalPodAutoscalerSpecMetricExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternal;

HorizontalPodAutoscalerSpecMetricExternal.builder()
    .metric(HorizontalPodAutoscalerSpecMetricExternalMetric)
//  .target(HorizontalPodAutoscalerSpecMetricExternalTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a></code> | target block. |

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.property.metric"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalMetric getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricExternalMetric <a name="HorizontalPodAutoscalerSpecMetricExternalMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric;

HorizontalPodAutoscalerSpecMetricExternalMetric.builder()
    .name(java.lang.String)
//  .selector(IResolvable)
//  .selector(java.util.List<HorizontalPodAutoscalerSpecMetricExternalMetricSelector>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.property.name">name</a></code> | <code>java.lang.String</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.property.selector">selector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector">HorizontalPodAutoscalerSpecMetricExternalMetricSelector</a>></code> | selector block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name is the name of the given metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric.property.selector"></a>

```java
public java.lang.Object getSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector">HorizontalPodAutoscalerSpecMetricExternalMetricSelector</a>>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}

---

### HorizontalPodAutoscalerSpecMetricExternalMetricSelector <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector;

HorizontalPodAutoscalerSpecMetricExternalMetricSelector.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}

---

### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions;

HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}

---

### HorizontalPodAutoscalerSpecMetricExternalTarget <a name="HorizontalPodAutoscalerSpecMetricExternalTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget;

HorizontalPodAutoscalerSpecMetricExternalTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetricObject <a name="HorizontalPodAutoscalerSpecMetricObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObject;

HorizontalPodAutoscalerSpecMetricObject.builder()
    .describedObject(HorizontalPodAutoscalerSpecMetricObjectDescribedObject)
    .metric(HorizontalPodAutoscalerSpecMetricObjectMetric)
//  .target(HorizontalPodAutoscalerSpecMetricObjectTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.describedObject">describedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a></code> | described_object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a></code> | target block. |

---

##### `describedObject`<sup>Required</sup> <a name="describedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.describedObject"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectDescribedObject getDescribedObject();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a>

described_object block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#described_object HorizontalPodAutoscaler#described_object}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.metric"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectMetric getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricObjectDescribedObject <a name="HorizontalPodAutoscalerSpecMetricObjectDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject;

HorizontalPodAutoscalerSpecMetricObjectDescribedObject.builder()
    .apiVersion(java.lang.String)
    .kind(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.kind">kind</a></code> | <code>java.lang.String</code> | Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#api_version HorizontalPodAutoscaler#api_version}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#kind HorizontalPodAutoscaler#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

### HorizontalPodAutoscalerSpecMetricObjectMetric <a name="HorizontalPodAutoscalerSpecMetricObjectMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric;

HorizontalPodAutoscalerSpecMetricObjectMetric.builder()
    .name(java.lang.String)
//  .selector(IResolvable)
//  .selector(java.util.List<HorizontalPodAutoscalerSpecMetricObjectMetricSelector>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.property.name">name</a></code> | <code>java.lang.String</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.property.selector">selector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector">HorizontalPodAutoscalerSpecMetricObjectMetricSelector</a>></code> | selector block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name is the name of the given metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric.property.selector"></a>

```java
public java.lang.Object getSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector">HorizontalPodAutoscalerSpecMetricObjectMetricSelector</a>>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}

---

### HorizontalPodAutoscalerSpecMetricObjectMetricSelector <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector;

HorizontalPodAutoscalerSpecMetricObjectMetricSelector.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}

---

### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions;

HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}

---

### HorizontalPodAutoscalerSpecMetricObjectTarget <a name="HorizontalPodAutoscalerSpecMetricObjectTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget;

HorizontalPodAutoscalerSpecMetricObjectTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetricPods <a name="HorizontalPodAutoscalerSpecMetricPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPods;

HorizontalPodAutoscalerSpecMetricPods.builder()
    .metric(HorizontalPodAutoscalerSpecMetricPodsMetric)
//  .target(HorizontalPodAutoscalerSpecMetricPodsTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a></code> | target block. |

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.property.metric"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsMetric getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#metric HorizontalPodAutoscaler#metric}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricPodsMetric <a name="HorizontalPodAutoscalerSpecMetricPodsMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric;

HorizontalPodAutoscalerSpecMetricPodsMetric.builder()
    .name(java.lang.String)
//  .selector(IResolvable)
//  .selector(java.util.List<HorizontalPodAutoscalerSpecMetricPodsMetricSelector>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.property.name">name</a></code> | <code>java.lang.String</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.property.selector">selector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector">HorizontalPodAutoscalerSpecMetricPodsMetricSelector</a>></code> | selector block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name is the name of the given metric.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric.property.selector"></a>

```java
public java.lang.Object getSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector">HorizontalPodAutoscalerSpecMetricPodsMetricSelector</a>>

selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#selector HorizontalPodAutoscaler#selector}

---

### HorizontalPodAutoscalerSpecMetricPodsMetricSelector <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector;

HorizontalPodAutoscalerSpecMetricPodsMetricSelector.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#match_expressions HorizontalPodAutoscaler#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#match_labels HorizontalPodAutoscaler#match_labels}

---

### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions;

HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#key HorizontalPodAutoscaler#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#operator HorizontalPodAutoscaler#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#values HorizontalPodAutoscaler#values}

---

### HorizontalPodAutoscalerSpecMetricPodsTarget <a name="HorizontalPodAutoscalerSpecMetricPodsTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget;

HorizontalPodAutoscalerSpecMetricPodsTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecMetricResource <a name="HorizontalPodAutoscalerSpecMetricResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricResource;

HorizontalPodAutoscalerSpecMetricResource.builder()
    .name(java.lang.String)
//  .target(HorizontalPodAutoscalerSpecMetricResourceTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.property.name">name</a></code> | <code>java.lang.String</code> | name is the name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a></code> | target block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name is the name of the resource in question.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricResourceTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#target HorizontalPodAutoscaler#target}

---

### HorizontalPodAutoscalerSpecMetricResourceTarget <a name="HorizontalPodAutoscalerSpecMetricResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget;

HorizontalPodAutoscalerSpecMetricResourceTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#type HorizontalPodAutoscaler#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_utilization HorizontalPodAutoscaler#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#average_value HorizontalPodAutoscaler#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#value HorizontalPodAutoscaler#value}

---

### HorizontalPodAutoscalerSpecScaleTargetRef <a name="HorizontalPodAutoscalerSpecScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecScaleTargetRef;

HorizontalPodAutoscalerSpecScaleTargetRef.builder()
    .kind(java.lang.String)
    .name(java.lang.String)
//  .apiVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.kind">kind</a></code> | <code>java.lang.String</code> | Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the referent. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#kind HorizontalPodAutoscaler#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#name HorizontalPodAutoscaler#name}

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version of the referent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.20.0/docs/resources/horizontal_pod_autoscaler#api_version HorizontalPodAutoscaler#api_version}

---

## Classes <a name="Classes" id="Classes"></a>

### HorizontalPodAutoscalerMetadataOutputReference <a name="HorizontalPodAutoscalerMetadataOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerMetadataOutputReference;

new HorizontalPodAutoscalerMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadataOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerMetadata">HorizontalPodAutoscalerMetadata</a>

---


### HorizontalPodAutoscalerSpecBehaviorOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference;

new HorizontalPodAutoscalerSpecBehaviorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleDown">putScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleUp">putScaleUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resetScaleDown">resetScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resetScaleUp">resetScaleUp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaleDown` <a name="putScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleDown"></a>

```java
public void putScaleDown(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecBehaviorScaleDown> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleDown.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown">HorizontalPodAutoscalerSpecBehaviorScaleDown</a>>

---

##### `putScaleUp` <a name="putScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleUp"></a>

```java
public void putScaleUp(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecBehaviorScaleUp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.putScaleUp.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp">HorizontalPodAutoscalerSpecBehaviorScaleUp</a>>

---

##### `resetScaleDown` <a name="resetScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resetScaleDown"></a>

```java
public void resetScaleDown()
```

##### `resetScaleUp` <a name="resetScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.resetScaleUp"></a>

```java
public void resetScaleUp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleDown">scaleDown</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList">HorizontalPodAutoscalerSpecBehaviorScaleDownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleUp">scaleUp</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList">HorizontalPodAutoscalerSpecBehaviorScaleUpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleDownInput">scaleDownInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown">HorizontalPodAutoscalerSpecBehaviorScaleDown</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleUpInput">scaleUpInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp">HorizontalPodAutoscalerSpecBehaviorScaleUp</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleDown`<sup>Required</sup> <a name="scaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleDown"></a>

```java
public HorizontalPodAutoscalerSpecBehaviorScaleDownList getScaleDown();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList">HorizontalPodAutoscalerSpecBehaviorScaleDownList</a>

---

##### `scaleUp`<sup>Required</sup> <a name="scaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleUp"></a>

```java
public HorizontalPodAutoscalerSpecBehaviorScaleUpList getScaleUp();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList">HorizontalPodAutoscalerSpecBehaviorScaleUpList</a>

---

##### `scaleDownInput`<sup>Optional</sup> <a name="scaleDownInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleDownInput"></a>

```java
public java.lang.Object getScaleDownInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown">HorizontalPodAutoscalerSpecBehaviorScaleDown</a>>

---

##### `scaleUpInput`<sup>Optional</sup> <a name="scaleUpInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.scaleUpInput"></a>

```java
public java.lang.Object getScaleUpInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp">HorizontalPodAutoscalerSpecBehaviorScaleUp</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecBehavior getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a>

---


### HorizontalPodAutoscalerSpecBehaviorScaleDownList <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList;

new HorizontalPodAutoscalerSpecBehaviorScaleDownList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.get"></a>

```java
public HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown">HorizontalPodAutoscalerSpecBehaviorScaleDown</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown">HorizontalPodAutoscalerSpecBehaviorScaleDown</a>>

---


### HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference;

new HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resetSelectPolicy">resetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds">resetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.putPolicy"></a>

```java
public void putPolicy(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.putPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy</a>>

---

##### `resetSelectPolicy` <a name="resetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resetSelectPolicy"></a>

```java
public void resetSelectPolicy()
```

##### `resetStabilizationWindowSeconds` <a name="resetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds"></a>

```java
public void resetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.policyInput">policyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.selectPolicyInput">selectPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput">stabilizationWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.selectPolicy">selectPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds">stabilizationWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown">HorizontalPodAutoscalerSpecBehaviorScaleDown</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.policy"></a>

```java
public HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList getPolicy();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.policyInput"></a>

```java
public java.lang.Object getPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy</a>>

---

##### `selectPolicyInput`<sup>Optional</sup> <a name="selectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.selectPolicyInput"></a>

```java
public java.lang.String getSelectPolicyInput();
```

- *Type:* java.lang.String

---

##### `stabilizationWindowSecondsInput`<sup>Optional</sup> <a name="stabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput"></a>

```java
public java.lang.Number getStabilizationWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `selectPolicy`<sup>Required</sup> <a name="selectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.selectPolicy"></a>

```java
public java.lang.String getSelectPolicy();
```

- *Type:* java.lang.String

---

##### `stabilizationWindowSeconds`<sup>Required</sup> <a name="stabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds"></a>

```java
public java.lang.Number getStabilizationWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDown">HorizontalPodAutoscalerSpecBehaviorScaleDown</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList;

new HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.get"></a>

```java
public HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy</a>>

---


### HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference;

new HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerSpecBehaviorScaleDownPolicy</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecBehaviorScaleUpList <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList;

new HorizontalPodAutoscalerSpecBehaviorScaleUpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.get"></a>

```java
public HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp">HorizontalPodAutoscalerSpecBehaviorScaleUp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp">HorizontalPodAutoscalerSpecBehaviorScaleUp</a>>

---


### HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference;

new HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resetSelectPolicy">resetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds">resetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.putPolicy"></a>

```java
public void putPolicy(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.putPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy</a>>

---

##### `resetSelectPolicy` <a name="resetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resetSelectPolicy"></a>

```java
public void resetSelectPolicy()
```

##### `resetStabilizationWindowSeconds` <a name="resetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds"></a>

```java
public void resetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.policyInput">policyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.selectPolicyInput">selectPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput">stabilizationWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.selectPolicy">selectPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds">stabilizationWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp">HorizontalPodAutoscalerSpecBehaviorScaleUp</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.policy"></a>

```java
public HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList getPolicy();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.policyInput"></a>

```java
public java.lang.Object getPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy</a>>

---

##### `selectPolicyInput`<sup>Optional</sup> <a name="selectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.selectPolicyInput"></a>

```java
public java.lang.String getSelectPolicyInput();
```

- *Type:* java.lang.String

---

##### `stabilizationWindowSecondsInput`<sup>Optional</sup> <a name="stabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput"></a>

```java
public java.lang.Number getStabilizationWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `selectPolicy`<sup>Required</sup> <a name="selectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.selectPolicy"></a>

```java
public java.lang.String getSelectPolicy();
```

- *Type:* java.lang.String

---

##### `stabilizationWindowSeconds`<sup>Required</sup> <a name="stabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds"></a>

```java
public java.lang.Number getStabilizationWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUp">HorizontalPodAutoscalerSpecBehaviorScaleUp</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList;

new HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.get"></a>

```java
public HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy</a>>

---


### HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference <a name="HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference;

new HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerSpecBehaviorScaleUpPolicy</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference <a name="HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference;

new HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerSpecMetricContainerResourceTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricContainerResourceTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricContainerResource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a>

---


### HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference;

new HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricContainerResourceTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceTarget">HorizontalPodAutoscalerSpecMetricContainerResourceTarget</a>

---


### HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference;

new HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resetSelector">resetSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.putSelector"></a>

```java
public void putSelector(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecMetricExternalMetricSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector">HorizontalPodAutoscalerSpecMetricExternalMetricSelector</a>>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.resetSelector"></a>

```java
public void resetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.selectorInput">selectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector">HorizontalPodAutoscalerSpecMetricExternalMetricSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.selector"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList getSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.selectorInput"></a>

```java
public java.lang.Object getSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector">HorizontalPodAutoscalerSpecMetricExternalMetricSelector</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalMetric getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a>

---


### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.get"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector">HorizontalPodAutoscalerSpecMetricExternalMetricSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector">HorizontalPodAutoscalerSpecMetricExternalMetricSelector</a>>

---


### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.get"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions</a>>

---


### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference;

new HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector">HorizontalPodAutoscalerSpecMetricExternalMetricSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchExpressions"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricExternalMetricSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricSelector">HorizontalPodAutoscalerSpecMetricExternalMetricSelector</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecMetricExternalOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference;

new HorizontalPodAutoscalerSpecMetricExternalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putMetric"></a>

```java
public void putMetric(HorizontalPodAutoscalerSpecMetricExternalMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerSpecMetricExternalTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.metric"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerSpecMetricExternalMetricOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.metricInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalMetric getMetricInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalMetric">HorizontalPodAutoscalerSpecMetricExternalMetric</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a>

---


### HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference;

new HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalTarget">HorizontalPodAutoscalerSpecMetricExternalTarget</a>

---


### HorizontalPodAutoscalerSpecMetricList <a name="HorizontalPodAutoscalerSpecMetricList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricList;

new HorizontalPodAutoscalerSpecMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.get"></a>

```java
public HorizontalPodAutoscalerSpecMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric">HorizontalPodAutoscalerSpecMetric</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric">HorizontalPodAutoscalerSpecMetric</a>>

---


### HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference;

new HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectDescribedObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a>

---


### HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference;

new HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resetSelector">resetSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.putSelector"></a>

```java
public void putSelector(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecMetricObjectMetricSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector">HorizontalPodAutoscalerSpecMetricObjectMetricSelector</a>>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.resetSelector"></a>

```java
public void resetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.selectorInput">selectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector">HorizontalPodAutoscalerSpecMetricObjectMetricSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.selector"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList getSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.selectorInput"></a>

```java
public java.lang.Object getSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector">HorizontalPodAutoscalerSpecMetricObjectMetricSelector</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectMetric getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a>

---


### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.get"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector">HorizontalPodAutoscalerSpecMetricObjectMetricSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector">HorizontalPodAutoscalerSpecMetricObjectMetricSelector</a>>

---


### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.get"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions</a>>

---


### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference;

new HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector">HorizontalPodAutoscalerSpecMetricObjectMetricSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchExpressions"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricObjectMetricSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricSelector">HorizontalPodAutoscalerSpecMetricObjectMetricSelector</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecMetricObjectOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference;

new HorizontalPodAutoscalerSpecMetricObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putDescribedObject">putDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDescribedObject` <a name="putDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putDescribedObject"></a>

```java
public void putDescribedObject(HorizontalPodAutoscalerSpecMetricObjectDescribedObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putDescribedObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putMetric"></a>

```java
public void putMetric(HorizontalPodAutoscalerSpecMetricObjectMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerSpecMetricObjectTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.describedObject">describedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.describedObjectInput">describedObjectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describedObject`<sup>Required</sup> <a name="describedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.describedObject"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference getDescribedObject();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerSpecMetricObjectDescribedObjectOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.metric"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerSpecMetricObjectMetricOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference</a>

---

##### `describedObjectInput`<sup>Optional</sup> <a name="describedObjectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.describedObjectInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectDescribedObject getDescribedObjectInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectDescribedObject">HorizontalPodAutoscalerSpecMetricObjectDescribedObject</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.metricInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectMetric getMetricInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectMetric">HorizontalPodAutoscalerSpecMetricObjectMetric</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a>

---


### HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference;

new HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectTarget">HorizontalPodAutoscalerSpecMetricObjectTarget</a>

---


### HorizontalPodAutoscalerSpecMetricOutputReference <a name="HorizontalPodAutoscalerSpecMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricOutputReference;

new HorizontalPodAutoscalerSpecMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putContainerResource">putContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putExternal">putExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putObject">putObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putPods">putPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetContainerResource">resetContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetExternal">resetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetPods">resetPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerResource` <a name="putContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putContainerResource"></a>

```java
public void putContainerResource(HorizontalPodAutoscalerSpecMetricContainerResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putContainerResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a>

---

##### `putExternal` <a name="putExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putExternal"></a>

```java
public void putExternal(HorizontalPodAutoscalerSpecMetricExternal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putExternal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a>

---

##### `putObject` <a name="putObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putObject"></a>

```java
public void putObject(HorizontalPodAutoscalerSpecMetricObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a>

---

##### `putPods` <a name="putPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putPods"></a>

```java
public void putPods(HorizontalPodAutoscalerSpecMetricPods value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putPods.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a>

---

##### `putResource` <a name="putResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putResource"></a>

```java
public void putResource(HorizontalPodAutoscalerSpecMetricResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a>

---

##### `resetContainerResource` <a name="resetContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetContainerResource"></a>

```java
public void resetContainerResource()
```

##### `resetExternal` <a name="resetExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetExternal"></a>

```java
public void resetExternal()
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetObject"></a>

```java
public void resetObject()
```

##### `resetPods` <a name="resetPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetPods"></a>

```java
public void resetPods()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.containerResource">containerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.external">external</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference">HorizontalPodAutoscalerSpecMetricExternalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.object">object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference">HorizontalPodAutoscalerSpecMetricObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.pods">pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference">HorizontalPodAutoscalerSpecMetricPodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference">HorizontalPodAutoscalerSpecMetricResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.containerResourceInput">containerResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.externalInput">externalInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.objectInput">objectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.podsInput">podsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.resourceInput">resourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric">HorizontalPodAutoscalerSpecMetric</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerResource`<sup>Required</sup> <a name="containerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.containerResource"></a>

```java
public HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference getContainerResource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerSpecMetricContainerResourceOutputReference</a>

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.external"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternalOutputReference getExternal();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternalOutputReference">HorizontalPodAutoscalerSpecMetricExternalOutputReference</a>

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.object"></a>

```java
public HorizontalPodAutoscalerSpecMetricObjectOutputReference getObject();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObjectOutputReference">HorizontalPodAutoscalerSpecMetricObjectOutputReference</a>

---

##### `pods`<sup>Required</sup> <a name="pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.pods"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsOutputReference getPods();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference">HorizontalPodAutoscalerSpecMetricPodsOutputReference</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.resource"></a>

```java
public HorizontalPodAutoscalerSpecMetricResourceOutputReference getResource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference">HorizontalPodAutoscalerSpecMetricResourceOutputReference</a>

---

##### `containerResourceInput`<sup>Optional</sup> <a name="containerResourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.containerResourceInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricContainerResource getContainerResourceInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricContainerResource">HorizontalPodAutoscalerSpecMetricContainerResource</a>

---

##### `externalInput`<sup>Optional</sup> <a name="externalInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.externalInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricExternal getExternalInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricExternal">HorizontalPodAutoscalerSpecMetricExternal</a>

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.objectInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricObject getObjectInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricObject">HorizontalPodAutoscalerSpecMetricObject</a>

---

##### `podsInput`<sup>Optional</sup> <a name="podsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.podsInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricPods getPodsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.resourceInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricResource getResourceInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric">HorizontalPodAutoscalerSpecMetric</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference;

new HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resetSelector">resetSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.putSelector"></a>

```java
public void putSelector(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecMetricPodsMetricSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector">HorizontalPodAutoscalerSpecMetricPodsMetricSelector</a>>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.resetSelector"></a>

```java
public void resetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.selectorInput">selectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector">HorizontalPodAutoscalerSpecMetricPodsMetricSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.selector"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList getSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.selectorInput"></a>

```java
public java.lang.Object getSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector">HorizontalPodAutoscalerSpecMetricPodsMetricSelector</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsMetric getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a>

---


### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.get"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector">HorizontalPodAutoscalerSpecMetricPodsMetricSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector">HorizontalPodAutoscalerSpecMetricPodsMetricSelector</a>>

---


### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.get"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions</a>>

---


### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference;

new HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector">HorizontalPodAutoscalerSpecMetricPodsMetricSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchExpressions"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerSpecMetricPodsMetricSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricSelector">HorizontalPodAutoscalerSpecMetricPodsMetricSelector</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerSpecMetricPodsOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference;

new HorizontalPodAutoscalerSpecMetricPodsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putMetric"></a>

```java
public void putMetric(HorizontalPodAutoscalerSpecMetricPodsMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerSpecMetricPodsTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.metric"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerSpecMetricPodsMetricOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.metricInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsMetric getMetricInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsMetric">HorizontalPodAutoscalerSpecMetricPodsMetric</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricPods getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPods">HorizontalPodAutoscalerSpecMetricPods</a>

---


### HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference;

new HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricPodsTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricPodsTarget">HorizontalPodAutoscalerSpecMetricPodsTarget</a>

---


### HorizontalPodAutoscalerSpecMetricResourceOutputReference <a name="HorizontalPodAutoscalerSpecMetricResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference;

new HorizontalPodAutoscalerSpecMetricResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerSpecMetricResourceTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerSpecMetricResourceTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricResource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResource">HorizontalPodAutoscalerSpecMetricResource</a>

---


### HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference <a name="HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference;

new HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecMetricResourceTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricResourceTarget">HorizontalPodAutoscalerSpecMetricResourceTarget</a>

---


### HorizontalPodAutoscalerSpecOutputReference <a name="HorizontalPodAutoscalerSpecOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecOutputReference;

new HorizontalPodAutoscalerSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putBehavior">putBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putScaleTargetRef">putScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetMinReplicas">resetMinReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetTargetCpuUtilizationPercentage">resetTargetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBehavior` <a name="putBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putBehavior"></a>

```java
public void putBehavior(HorizontalPodAutoscalerSpecBehavior value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putMetric"></a>

```java
public void putMetric(IResolvable OR java.util.List<HorizontalPodAutoscalerSpecMetric> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putMetric.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric">HorizontalPodAutoscalerSpecMetric</a>>

---

##### `putScaleTargetRef` <a name="putScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putScaleTargetRef"></a>

```java
public void putScaleTargetRef(HorizontalPodAutoscalerSpecScaleTargetRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.putScaleTargetRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a>

---

##### `resetBehavior` <a name="resetBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetBehavior"></a>

```java
public void resetBehavior()
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMinReplicas` <a name="resetMinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetMinReplicas"></a>

```java
public void resetMinReplicas()
```

##### `resetTargetCpuUtilizationPercentage` <a name="resetTargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.resetTargetCpuUtilizationPercentage"></a>

```java
public void resetTargetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.behavior">behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference">HorizontalPodAutoscalerSpecBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList">HorizontalPodAutoscalerSpecMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.scaleTargetRef">scaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference">HorizontalPodAutoscalerSpecScaleTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.behaviorInput">behaviorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.metricInput">metricInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric">HorizontalPodAutoscalerSpecMetric</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.scaleTargetRefInput">scaleTargetRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.targetCpuUtilizationPercentageInput">targetCpuUtilizationPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.targetCpuUtilizationPercentage">targetCpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.behavior"></a>

```java
public HorizontalPodAutoscalerSpecBehaviorOutputReference getBehavior();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehaviorOutputReference">HorizontalPodAutoscalerSpecBehaviorOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.metric"></a>

```java
public HorizontalPodAutoscalerSpecMetricList getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetricList">HorizontalPodAutoscalerSpecMetricList</a>

---

##### `scaleTargetRef`<sup>Required</sup> <a name="scaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.scaleTargetRef"></a>

```java
public HorizontalPodAutoscalerSpecScaleTargetRefOutputReference getScaleTargetRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference">HorizontalPodAutoscalerSpecScaleTargetRefOutputReference</a>

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.behaviorInput"></a>

```java
public HorizontalPodAutoscalerSpecBehavior getBehaviorInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecBehavior">HorizontalPodAutoscalerSpecBehavior</a>

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.maxReplicasInput"></a>

```java
public java.lang.Number getMaxReplicasInput();
```

- *Type:* java.lang.Number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.metricInput"></a>

```java
public java.lang.Object getMetricInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecMetric">HorizontalPodAutoscalerSpecMetric</a>>

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.minReplicasInput"></a>

```java
public java.lang.Number getMinReplicasInput();
```

- *Type:* java.lang.Number

---

##### `scaleTargetRefInput`<sup>Optional</sup> <a name="scaleTargetRefInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.scaleTargetRefInput"></a>

```java
public HorizontalPodAutoscalerSpecScaleTargetRef getScaleTargetRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a>

---

##### `targetCpuUtilizationPercentageInput`<sup>Optional</sup> <a name="targetCpuUtilizationPercentageInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.targetCpuUtilizationPercentageInput"></a>

```java
public java.lang.Number getTargetCpuUtilizationPercentageInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

---

##### `targetCpuUtilizationPercentage`<sup>Required</sup> <a name="targetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.targetCpuUtilizationPercentage"></a>

```java
public java.lang.Number getTargetCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpec">HorizontalPodAutoscalerSpec</a>

---


### HorizontalPodAutoscalerSpecScaleTargetRefOutputReference <a name="HorizontalPodAutoscalerSpecScaleTargetRefOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference;

new HorizontalPodAutoscalerSpecScaleTargetRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resetApiVersion">resetApiVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.resetApiVersion"></a>

```java
public void resetApiVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRefOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerSpecScaleTargetRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscaler.HorizontalPodAutoscalerSpecScaleTargetRef">HorizontalPodAutoscalerSpecScaleTargetRef</a>

---



