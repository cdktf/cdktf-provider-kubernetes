# `kubernetes_horizontal_pod_autoscaler_v2`

Refer to the Terraform Registory for docs: [`kubernetes_horizontal_pod_autoscaler_v2`](https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2).

# `horizontalPodAutoscalerV2` Submodule <a name="`horizontalPodAutoscalerV2` Submodule" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HorizontalPodAutoscalerV2 <a name="HorizontalPodAutoscalerV2" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2 kubernetes_horizontal_pod_autoscaler_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2;

HorizontalPodAutoscalerV2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(HorizontalPodAutoscalerV2Metadata)
    .spec(HorizontalPodAutoscalerV2Spec)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata">HorizontalPodAutoscalerV2Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec">HorizontalPodAutoscalerV2Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#id HorizontalPodAutoscalerV2#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata">HorizontalPodAutoscalerV2Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#metadata HorizontalPodAutoscalerV2#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec">HorizontalPodAutoscalerV2Spec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#spec HorizontalPodAutoscalerV2#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#id HorizontalPodAutoscalerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.putMetadata"></a>

```java
public void putMetadata(HorizontalPodAutoscalerV2Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata">HorizontalPodAutoscalerV2Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.putSpec"></a>

```java
public void putSpec(HorizontalPodAutoscalerV2Spec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec">HorizontalPodAutoscalerV2Spec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2;

HorizontalPodAutoscalerV2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2;

HorizontalPodAutoscalerV2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2;

HorizontalPodAutoscalerV2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference">HorizontalPodAutoscalerV2MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference">HorizontalPodAutoscalerV2SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata">HorizontalPodAutoscalerV2Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec">HorizontalPodAutoscalerV2Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.metadata"></a>

```java
public HorizontalPodAutoscalerV2MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference">HorizontalPodAutoscalerV2MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.spec"></a>

```java
public HorizontalPodAutoscalerV2SpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference">HorizontalPodAutoscalerV2SpecOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.metadataInput"></a>

```java
public HorizontalPodAutoscalerV2Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata">HorizontalPodAutoscalerV2Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.specInput"></a>

```java
public HorizontalPodAutoscalerV2Spec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec">HorizontalPodAutoscalerV2Spec</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HorizontalPodAutoscalerV2Config <a name="HorizontalPodAutoscalerV2Config" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2Config;

HorizontalPodAutoscalerV2Config.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .metadata(HorizontalPodAutoscalerV2Metadata)
    .spec(HorizontalPodAutoscalerV2Spec)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata">HorizontalPodAutoscalerV2Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec">HorizontalPodAutoscalerV2Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#id HorizontalPodAutoscalerV2#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.metadata"></a>

```java
public HorizontalPodAutoscalerV2Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata">HorizontalPodAutoscalerV2Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#metadata HorizontalPodAutoscalerV2#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.spec"></a>

```java
public HorizontalPodAutoscalerV2Spec getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec">HorizontalPodAutoscalerV2Spec</a>

spec block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#spec HorizontalPodAutoscalerV2#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#id HorizontalPodAutoscalerV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### HorizontalPodAutoscalerV2Metadata <a name="HorizontalPodAutoscalerV2Metadata" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2Metadata;

HorizontalPodAutoscalerV2Metadata.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the horizontal pod autoscaler must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the horizontal pod autoscaler that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#annotations HorizontalPodAutoscalerV2#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. Read more: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#generate_name HorizontalPodAutoscalerV2#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the horizontal pod autoscaler.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#labels HorizontalPodAutoscalerV2#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the horizontal pod autoscaler, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#name HorizontalPodAutoscalerV2#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the horizontal pod autoscaler must be unique.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#namespace HorizontalPodAutoscalerV2#namespace}

---

### HorizontalPodAutoscalerV2Spec <a name="HorizontalPodAutoscalerV2Spec" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2Spec;

HorizontalPodAutoscalerV2Spec.builder()
    .maxReplicas(java.lang.Number)
    .scaleTargetRef(HorizontalPodAutoscalerV2SpecScaleTargetRef)
//  .behavior(HorizontalPodAutoscalerV2SpecBehavior)
//  .metric(IResolvable)
//  .metric(java.util.List<HorizontalPodAutoscalerV2SpecMetric>)
//  .minReplicas(java.lang.Number)
//  .targetCpuUtilizationPercentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | Upper limit for the number of pods that can be set by the autoscaler. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.scaleTargetRef">scaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef">HorizontalPodAutoscalerV2SpecScaleTargetRef</a></code> | scale_target_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.behavior">behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior">HorizontalPodAutoscalerV2SpecBehavior</a></code> | behavior block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.metric">metric</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric">HorizontalPodAutoscalerV2SpecMetric</a>></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.targetCpuUtilizationPercentage">targetCpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | Target average CPU utilization (represented as a percentage of requested CPU) over all the pods. |

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

Upper limit for the number of pods that can be set by the autoscaler.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#max_replicas HorizontalPodAutoscalerV2#max_replicas}

---

##### `scaleTargetRef`<sup>Required</sup> <a name="scaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.scaleTargetRef"></a>

```java
public HorizontalPodAutoscalerV2SpecScaleTargetRef getScaleTargetRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef">HorizontalPodAutoscalerV2SpecScaleTargetRef</a>

scale_target_ref block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#scale_target_ref HorizontalPodAutoscalerV2#scale_target_ref}

---

##### `behavior`<sup>Optional</sup> <a name="behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.behavior"></a>

```java
public HorizontalPodAutoscalerV2SpecBehavior getBehavior();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior">HorizontalPodAutoscalerV2SpecBehavior</a>

behavior block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#behavior HorizontalPodAutoscalerV2#behavior}

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.metric"></a>

```java
public java.lang.Object getMetric();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric">HorizontalPodAutoscalerV2SpecMetric</a>>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#metric HorizontalPodAutoscalerV2#metric}

---

##### `minReplicas`<sup>Optional</sup> <a name="minReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

Lower limit for the number of pods that can be set by the autoscaler, defaults to `1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#min_replicas HorizontalPodAutoscalerV2#min_replicas}

---

##### `targetCpuUtilizationPercentage`<sup>Optional</sup> <a name="targetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec.property.targetCpuUtilizationPercentage"></a>

```java
public java.lang.Number getTargetCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

Target average CPU utilization (represented as a percentage of requested CPU) over all the pods.

If not specified the default autoscaling policy will be used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#target_cpu_utilization_percentage HorizontalPodAutoscalerV2#target_cpu_utilization_percentage}

---

### HorizontalPodAutoscalerV2SpecBehavior <a name="HorizontalPodAutoscalerV2SpecBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehavior;

HorizontalPodAutoscalerV2SpecBehavior.builder()
//  .scaleDown(IResolvable)
//  .scaleDown(java.util.List<HorizontalPodAutoscalerV2SpecBehaviorScaleDown>)
//  .scaleUp(IResolvable)
//  .scaleUp(java.util.List<HorizontalPodAutoscalerV2SpecBehaviorScaleUp>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior.property.scaleDown">scaleDown</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown">HorizontalPodAutoscalerV2SpecBehaviorScaleDown</a>></code> | scale_down block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior.property.scaleUp">scaleUp</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp">HorizontalPodAutoscalerV2SpecBehaviorScaleUp</a>></code> | scale_up block. |

---

##### `scaleDown`<sup>Optional</sup> <a name="scaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior.property.scaleDown"></a>

```java
public java.lang.Object getScaleDown();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown">HorizontalPodAutoscalerV2SpecBehaviorScaleDown</a>>

scale_down block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#scale_down HorizontalPodAutoscalerV2#scale_down}

---

##### `scaleUp`<sup>Optional</sup> <a name="scaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior.property.scaleUp"></a>

```java
public java.lang.Object getScaleUp();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp">HorizontalPodAutoscalerV2SpecBehaviorScaleUp</a>>

scale_up block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#scale_up HorizontalPodAutoscalerV2#scale_up}

---

### HorizontalPodAutoscalerV2SpecBehaviorScaleDown <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown;

HorizontalPodAutoscalerV2SpecBehaviorScaleDown.builder()
    .policy(IResolvable)
    .policy(java.util.List<HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy>)
//  .selectPolicy(java.lang.String)
//  .stabilizationWindowSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown.property.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy</a>></code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown.property.selectPolicy">selectPolicy</a></code> | <code>java.lang.String</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown.property.stabilizationWindowSeconds">stabilizationWindowSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown.property.policy"></a>

```java
public java.lang.Object getPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy</a>>

policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#policy HorizontalPodAutoscalerV2#policy}

---

##### `selectPolicy`<sup>Optional</sup> <a name="selectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown.property.selectPolicy"></a>

```java
public java.lang.String getSelectPolicy();
```

- *Type:* java.lang.String

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#select_policy HorizontalPodAutoscalerV2#select_policy}

---

##### `stabilizationWindowSeconds`<sup>Optional</sup> <a name="stabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown.property.stabilizationWindowSeconds"></a>

```java
public java.lang.Number getStabilizationWindowSeconds();
```

- *Type:* java.lang.Number

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#stabilization_window_seconds HorizontalPodAutoscalerV2#stabilization_window_seconds}

---

### HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy;

HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy.builder()
    .periodSeconds(java.lang.Number)
    .type(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy.property.type">type</a></code> | <code>java.lang.String</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy.property.value">value</a></code> | <code>java.lang.Number</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#period_seconds HorizontalPodAutoscalerV2#period_seconds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#type HorizontalPodAutoscalerV2#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#value HorizontalPodAutoscalerV2#value}

---

### HorizontalPodAutoscalerV2SpecBehaviorScaleUp <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp;

HorizontalPodAutoscalerV2SpecBehaviorScaleUp.builder()
    .policy(IResolvable)
    .policy(java.util.List<HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy>)
//  .selectPolicy(java.lang.String)
//  .stabilizationWindowSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp.property.policy">policy</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy</a>></code> | policy block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp.property.selectPolicy">selectPolicy</a></code> | <code>java.lang.String</code> | Used to specify which policy should be used. If not set, the default value Max is used. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp.property.stabilizationWindowSeconds">stabilizationWindowSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds for which past recommendations should be considered while scaling up or scaling down. |

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp.property.policy"></a>

```java
public java.lang.Object getPolicy();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy</a>>

policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#policy HorizontalPodAutoscalerV2#policy}

---

##### `selectPolicy`<sup>Optional</sup> <a name="selectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp.property.selectPolicy"></a>

```java
public java.lang.String getSelectPolicy();
```

- *Type:* java.lang.String

Used to specify which policy should be used. If not set, the default value Max is used.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#select_policy HorizontalPodAutoscalerV2#select_policy}

---

##### `stabilizationWindowSeconds`<sup>Optional</sup> <a name="stabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp.property.stabilizationWindowSeconds"></a>

```java
public java.lang.Number getStabilizationWindowSeconds();
```

- *Type:* java.lang.Number

Number of seconds for which past recommendations should be considered while scaling up or scaling down.

This value must be greater than or equal to zero and less than or equal to 3600 (one hour). If not set, use the default values: - For scale up: 0 (i.e. no stabilization is done). - For scale down: 300 (i.e. the stabilization window is 300 seconds long).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#stabilization_window_seconds HorizontalPodAutoscalerV2#stabilization_window_seconds}

---

### HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy;

HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy.builder()
    .periodSeconds(java.lang.Number)
    .type(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | Period specifies the window of time for which the policy should hold true. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy.property.type">type</a></code> | <code>java.lang.String</code> | Type is used to specify the scaling policy: Percent or Pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy.property.value">value</a></code> | <code>java.lang.Number</code> | Value contains the amount of change which is permitted by the policy. It must be greater than zero. |

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

Period specifies the window of time for which the policy should hold true.

PeriodSeconds must be greater than zero and less than or equal to 1800 (30 min).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#period_seconds HorizontalPodAutoscalerV2#period_seconds}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type is used to specify the scaling policy: Percent or Pods.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#type HorizontalPodAutoscalerV2#type}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Value contains the amount of change which is permitted by the policy. It must be greater than zero.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#value HorizontalPodAutoscalerV2#value}

---

### HorizontalPodAutoscalerV2SpecMetric <a name="HorizontalPodAutoscalerV2SpecMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetric;

HorizontalPodAutoscalerV2SpecMetric.builder()
    .type(java.lang.String)
//  .containerResource(HorizontalPodAutoscalerV2SpecMetricContainerResource)
//  .external(HorizontalPodAutoscalerV2SpecMetricExternal)
//  .object(HorizontalPodAutoscalerV2SpecMetricObject)
//  .pods(HorizontalPodAutoscalerV2SpecMetricPods)
//  .resource(HorizontalPodAutoscalerV2SpecMetricResource)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.type">type</a></code> | <code>java.lang.String</code> | type is the type of metric source. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.containerResource">containerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource">HorizontalPodAutoscalerV2SpecMetricContainerResource</a></code> | container_resource block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.external">external</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal">HorizontalPodAutoscalerV2SpecMetricExternal</a></code> | external block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.object">object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject">HorizontalPodAutoscalerV2SpecMetricObject</a></code> | object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.pods">pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods">HorizontalPodAutoscalerV2SpecMetricPods</a></code> | pods block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource">HorizontalPodAutoscalerV2SpecMetricResource</a></code> | resource block. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type is the type of metric source.

It should be one of "ContainerResource", "External", "Object", "Pods" or "Resource", each mapping to a matching field in the object. Note: "ContainerResource" type is available on when the feature-gate HPAContainerMetrics is enabled

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#type HorizontalPodAutoscalerV2#type}

---

##### `containerResource`<sup>Optional</sup> <a name="containerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.containerResource"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricContainerResource getContainerResource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource">HorizontalPodAutoscalerV2SpecMetricContainerResource</a>

container_resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#container_resource HorizontalPodAutoscalerV2#container_resource}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.external"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternal getExternal();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal">HorizontalPodAutoscalerV2SpecMetricExternal</a>

external block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#external HorizontalPodAutoscalerV2#external}

---

##### `object`<sup>Optional</sup> <a name="object" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.object"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObject getObject();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject">HorizontalPodAutoscalerV2SpecMetricObject</a>

object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#object HorizontalPodAutoscalerV2#object}

---

##### `pods`<sup>Optional</sup> <a name="pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.pods"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPods getPods();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods">HorizontalPodAutoscalerV2SpecMetricPods</a>

pods block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#pods HorizontalPodAutoscalerV2#pods}

---

##### `resource`<sup>Optional</sup> <a name="resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric.property.resource"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricResource getResource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource">HorizontalPodAutoscalerV2SpecMetricResource</a>

resource block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#resource HorizontalPodAutoscalerV2#resource}

---

### HorizontalPodAutoscalerV2SpecMetricContainerResource <a name="HorizontalPodAutoscalerV2SpecMetricContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricContainerResource;

HorizontalPodAutoscalerV2SpecMetricContainerResource.builder()
    .container(java.lang.String)
    .name(java.lang.String)
//  .target(HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource.property.container">container</a></code> | <code>java.lang.String</code> | name of the container in the pods of the scaling target. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource.property.name">name</a></code> | <code>java.lang.String</code> | name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget</a></code> | target block. |

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

name of the container in the pods of the scaling target.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#container HorizontalPodAutoscalerV2#container}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name of the resource in question.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#name HorizontalPodAutoscalerV2#name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#target HorizontalPodAutoscalerV2#target}

---

### HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget <a name="HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget;

HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#type HorizontalPodAutoscalerV2#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_utilization HorizontalPodAutoscalerV2#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_value HorizontalPodAutoscalerV2#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#value HorizontalPodAutoscalerV2#value}

---

### HorizontalPodAutoscalerV2SpecMetricExternal <a name="HorizontalPodAutoscalerV2SpecMetricExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternal;

HorizontalPodAutoscalerV2SpecMetricExternal.builder()
    .metric(HorizontalPodAutoscalerV2SpecMetricExternalMetric)
//  .target(HorizontalPodAutoscalerV2SpecMetricExternalTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric">HorizontalPodAutoscalerV2SpecMetricExternalMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget">HorizontalPodAutoscalerV2SpecMetricExternalTarget</a></code> | target block. |

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal.property.metric"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalMetric getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric">HorizontalPodAutoscalerV2SpecMetricExternalMetric</a>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#metric HorizontalPodAutoscalerV2#metric}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget">HorizontalPodAutoscalerV2SpecMetricExternalTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#target HorizontalPodAutoscalerV2#target}

---

### HorizontalPodAutoscalerV2SpecMetricExternalMetric <a name="HorizontalPodAutoscalerV2SpecMetricExternalMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalMetric;

HorizontalPodAutoscalerV2SpecMetricExternalMetric.builder()
    .name(java.lang.String)
//  .selector(IResolvable)
//  .selector(java.util.List<HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric.property.name">name</a></code> | <code>java.lang.String</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric.property.selector">selector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector</a>></code> | selector block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name is the name of the given metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#name HorizontalPodAutoscalerV2#name}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric.property.selector"></a>

```java
public java.lang.Object getSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector</a>>

selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#selector HorizontalPodAutoscalerV2#selector}

---

### HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector <a name="HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector;

HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#match_expressions HorizontalPodAutoscalerV2#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#match_labels HorizontalPodAutoscalerV2#match_labels}

---

### HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions;

HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#key HorizontalPodAutoscalerV2#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#operator HorizontalPodAutoscalerV2#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#values HorizontalPodAutoscalerV2#values}

---

### HorizontalPodAutoscalerV2SpecMetricExternalTarget <a name="HorizontalPodAutoscalerV2SpecMetricExternalTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalTarget;

HorizontalPodAutoscalerV2SpecMetricExternalTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#type HorizontalPodAutoscalerV2#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_utilization HorizontalPodAutoscalerV2#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_value HorizontalPodAutoscalerV2#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#value HorizontalPodAutoscalerV2#value}

---

### HorizontalPodAutoscalerV2SpecMetricObject <a name="HorizontalPodAutoscalerV2SpecMetricObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObject;

HorizontalPodAutoscalerV2SpecMetricObject.builder()
    .describedObject(HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject)
    .metric(HorizontalPodAutoscalerV2SpecMetricObjectMetric)
//  .target(HorizontalPodAutoscalerV2SpecMetricObjectTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject.property.describedObject">describedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject</a></code> | described_object block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric">HorizontalPodAutoscalerV2SpecMetricObjectMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget">HorizontalPodAutoscalerV2SpecMetricObjectTarget</a></code> | target block. |

---

##### `describedObject`<sup>Required</sup> <a name="describedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject.property.describedObject"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject getDescribedObject();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject</a>

described_object block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#described_object HorizontalPodAutoscalerV2#described_object}

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject.property.metric"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectMetric getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric">HorizontalPodAutoscalerV2SpecMetricObjectMetric</a>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#metric HorizontalPodAutoscalerV2#metric}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget">HorizontalPodAutoscalerV2SpecMetricObjectTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#target HorizontalPodAutoscalerV2#target}

---

### HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject <a name="HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject;

HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject.builder()
    .apiVersion(java.lang.String)
    .kind(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the referent. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject.property.kind">kind</a></code> | <code>java.lang.String</code> | Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version of the referent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#api_version HorizontalPodAutoscalerV2#api_version}

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#kind HorizontalPodAutoscalerV2#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#name HorizontalPodAutoscalerV2#name}

---

### HorizontalPodAutoscalerV2SpecMetricObjectMetric <a name="HorizontalPodAutoscalerV2SpecMetricObjectMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectMetric;

HorizontalPodAutoscalerV2SpecMetricObjectMetric.builder()
    .name(java.lang.String)
//  .selector(IResolvable)
//  .selector(java.util.List<HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric.property.name">name</a></code> | <code>java.lang.String</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric.property.selector">selector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector</a>></code> | selector block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name is the name of the given metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#name HorizontalPodAutoscalerV2#name}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric.property.selector"></a>

```java
public java.lang.Object getSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector</a>>

selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#selector HorizontalPodAutoscalerV2#selector}

---

### HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector <a name="HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector;

HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#match_expressions HorizontalPodAutoscalerV2#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#match_labels HorizontalPodAutoscalerV2#match_labels}

---

### HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions;

HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#key HorizontalPodAutoscalerV2#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#operator HorizontalPodAutoscalerV2#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#values HorizontalPodAutoscalerV2#values}

---

### HorizontalPodAutoscalerV2SpecMetricObjectTarget <a name="HorizontalPodAutoscalerV2SpecMetricObjectTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectTarget;

HorizontalPodAutoscalerV2SpecMetricObjectTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#type HorizontalPodAutoscalerV2#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_utilization HorizontalPodAutoscalerV2#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_value HorizontalPodAutoscalerV2#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#value HorizontalPodAutoscalerV2#value}

---

### HorizontalPodAutoscalerV2SpecMetricPods <a name="HorizontalPodAutoscalerV2SpecMetricPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPods;

HorizontalPodAutoscalerV2SpecMetricPods.builder()
    .metric(HorizontalPodAutoscalerV2SpecMetricPodsMetric)
//  .target(HorizontalPodAutoscalerV2SpecMetricPodsTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric">HorizontalPodAutoscalerV2SpecMetricPodsMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget">HorizontalPodAutoscalerV2SpecMetricPodsTarget</a></code> | target block. |

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods.property.metric"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsMetric getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric">HorizontalPodAutoscalerV2SpecMetricPodsMetric</a>

metric block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#metric HorizontalPodAutoscalerV2#metric}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget">HorizontalPodAutoscalerV2SpecMetricPodsTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#target HorizontalPodAutoscalerV2#target}

---

### HorizontalPodAutoscalerV2SpecMetricPodsMetric <a name="HorizontalPodAutoscalerV2SpecMetricPodsMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsMetric;

HorizontalPodAutoscalerV2SpecMetricPodsMetric.builder()
    .name(java.lang.String)
//  .selector(IResolvable)
//  .selector(java.util.List<HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric.property.name">name</a></code> | <code>java.lang.String</code> | name is the name of the given metric. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric.property.selector">selector</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector</a>></code> | selector block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name is the name of the given metric.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#name HorizontalPodAutoscalerV2#name}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric.property.selector"></a>

```java
public java.lang.Object getSelector();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector</a>>

selector block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#selector HorizontalPodAutoscalerV2#selector}

---

### HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector <a name="HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector;

HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions>)
//  .matchLabels(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A map of {key,value} pairs. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#match_expressions HorizontalPodAutoscalerV2#match_expressions}

---

##### `matchLabels`<sup>Optional</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A map of {key,value} pairs.

A single {key,value} in the matchLabels map is equivalent to an element of `match_expressions`, whose key field is "key", the operator is "In", and the values array contains only "value". The requirements are ANDed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#match_labels HorizontalPodAutoscalerV2#match_labels}

---

### HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions <a name="HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions;

HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions.builder()
//  .key(java.lang.String)
//  .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#key HorizontalPodAutoscalerV2#key}

---

##### `operator`<sup>Optional</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists` and `DoesNotExist`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#operator HorizontalPodAutoscalerV2#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#values HorizontalPodAutoscalerV2#values}

---

### HorizontalPodAutoscalerV2SpecMetricPodsTarget <a name="HorizontalPodAutoscalerV2SpecMetricPodsTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsTarget;

HorizontalPodAutoscalerV2SpecMetricPodsTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#type HorizontalPodAutoscalerV2#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_utilization HorizontalPodAutoscalerV2#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_value HorizontalPodAutoscalerV2#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#value HorizontalPodAutoscalerV2#value}

---

### HorizontalPodAutoscalerV2SpecMetricResource <a name="HorizontalPodAutoscalerV2SpecMetricResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricResource;

HorizontalPodAutoscalerV2SpecMetricResource.builder()
    .name(java.lang.String)
//  .target(HorizontalPodAutoscalerV2SpecMetricResourceTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource.property.name">name</a></code> | <code>java.lang.String</code> | name is the name of the resource in question. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget">HorizontalPodAutoscalerV2SpecMetricResourceTarget</a></code> | target block. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

name is the name of the resource in question.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#name HorizontalPodAutoscalerV2#name}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricResourceTarget getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget">HorizontalPodAutoscalerV2SpecMetricResourceTarget</a>

target block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#target HorizontalPodAutoscalerV2#target}

---

### HorizontalPodAutoscalerV2SpecMetricResourceTarget <a name="HorizontalPodAutoscalerV2SpecMetricResourceTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricResourceTarget;

HorizontalPodAutoscalerV2SpecMetricResourceTarget.builder()
    .type(java.lang.String)
//  .averageUtilization(java.lang.Number)
//  .averageValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget.property.type">type</a></code> | <code>java.lang.String</code> | type represents whether the metric type is Utilization, Value, or AverageValue. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | averageValue is the target value of the average of the metric across all relevant pods (as a quantity). |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget.property.value">value</a></code> | <code>java.lang.String</code> | value is the target value of the metric (as a quantity). |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

type represents whether the metric type is Utilization, Value, or AverageValue.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#type HorizontalPodAutoscalerV2#type}

---

##### `averageUtilization`<sup>Optional</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

averageUtilization is the target value of the average of the resource metric across all relevant pods, represented as a percentage of the requested value of the resource for the pods.

Currently only valid for Resource metric source type

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_utilization HorizontalPodAutoscalerV2#average_utilization}

---

##### `averageValue`<sup>Optional</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

averageValue is the target value of the average of the metric across all relevant pods (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#average_value HorizontalPodAutoscalerV2#average_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

value is the target value of the metric (as a quantity).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#value HorizontalPodAutoscalerV2#value}

---

### HorizontalPodAutoscalerV2SpecScaleTargetRef <a name="HorizontalPodAutoscalerV2SpecScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecScaleTargetRef;

HorizontalPodAutoscalerV2SpecScaleTargetRef.builder()
    .kind(java.lang.String)
    .name(java.lang.String)
//  .apiVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef.property.kind">kind</a></code> | <code>java.lang.String</code> | Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | API version of the referent. |

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Kind of the referent. e.g. `ReplicationController`. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#kind HorizontalPodAutoscalerV2#kind}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#name HorizontalPodAutoscalerV2#name}

---

##### `apiVersion`<sup>Optional</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

API version of the referent.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/kubernetes/r/horizontal_pod_autoscaler_v2#api_version HorizontalPodAutoscalerV2#api_version}

---

## Classes <a name="Classes" id="Classes"></a>

### HorizontalPodAutoscalerV2MetadataOutputReference <a name="HorizontalPodAutoscalerV2MetadataOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2MetadataOutputReference;

new HorizontalPodAutoscalerV2MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata">HorizontalPodAutoscalerV2Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2MetadataOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Metadata">HorizontalPodAutoscalerV2Metadata</a>

---


### HorizontalPodAutoscalerV2SpecBehaviorOutputReference <a name="HorizontalPodAutoscalerV2SpecBehaviorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference;

new HorizontalPodAutoscalerV2SpecBehaviorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.putScaleDown">putScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.putScaleUp">putScaleUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.resetScaleDown">resetScaleDown</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.resetScaleUp">resetScaleUp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScaleDown` <a name="putScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.putScaleDown"></a>

```java
public void putScaleDown(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecBehaviorScaleDown> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.putScaleDown.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown">HorizontalPodAutoscalerV2SpecBehaviorScaleDown</a>>

---

##### `putScaleUp` <a name="putScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.putScaleUp"></a>

```java
public void putScaleUp(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecBehaviorScaleUp> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.putScaleUp.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp">HorizontalPodAutoscalerV2SpecBehaviorScaleUp</a>>

---

##### `resetScaleDown` <a name="resetScaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.resetScaleDown"></a>

```java
public void resetScaleDown()
```

##### `resetScaleUp` <a name="resetScaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.resetScaleUp"></a>

```java
public void resetScaleUp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.scaleDown">scaleDown</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList">HorizontalPodAutoscalerV2SpecBehaviorScaleDownList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.scaleUp">scaleUp</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList">HorizontalPodAutoscalerV2SpecBehaviorScaleUpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.scaleDownInput">scaleDownInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown">HorizontalPodAutoscalerV2SpecBehaviorScaleDown</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.scaleUpInput">scaleUpInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp">HorizontalPodAutoscalerV2SpecBehaviorScaleUp</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior">HorizontalPodAutoscalerV2SpecBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scaleDown`<sup>Required</sup> <a name="scaleDown" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.scaleDown"></a>

```java
public HorizontalPodAutoscalerV2SpecBehaviorScaleDownList getScaleDown();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList">HorizontalPodAutoscalerV2SpecBehaviorScaleDownList</a>

---

##### `scaleUp`<sup>Required</sup> <a name="scaleUp" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.scaleUp"></a>

```java
public HorizontalPodAutoscalerV2SpecBehaviorScaleUpList getScaleUp();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList">HorizontalPodAutoscalerV2SpecBehaviorScaleUpList</a>

---

##### `scaleDownInput`<sup>Optional</sup> <a name="scaleDownInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.scaleDownInput"></a>

```java
public java.lang.Object getScaleDownInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown">HorizontalPodAutoscalerV2SpecBehaviorScaleDown</a>>

---

##### `scaleUpInput`<sup>Optional</sup> <a name="scaleUpInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.scaleUpInput"></a>

```java
public java.lang.Object getScaleUpInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp">HorizontalPodAutoscalerV2SpecBehaviorScaleUp</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecBehavior getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior">HorizontalPodAutoscalerV2SpecBehavior</a>

---


### HorizontalPodAutoscalerV2SpecBehaviorScaleDownList <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleDownList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList;

new HorizontalPodAutoscalerV2SpecBehaviorScaleDownList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown">HorizontalPodAutoscalerV2SpecBehaviorScaleDown</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown">HorizontalPodAutoscalerV2SpecBehaviorScaleDown</a>>

---


### HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference;

new HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.resetSelectPolicy">resetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds">resetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.putPolicy"></a>

```java
public void putPolicy(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.putPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy</a>>

---

##### `resetSelectPolicy` <a name="resetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.resetSelectPolicy"></a>

```java
public void resetSelectPolicy()
```

##### `resetStabilizationWindowSeconds` <a name="resetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.resetStabilizationWindowSeconds"></a>

```java
public void resetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.policyInput">policyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.selectPolicyInput">selectPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput">stabilizationWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.selectPolicy">selectPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds">stabilizationWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown">HorizontalPodAutoscalerV2SpecBehaviorScaleDown</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.policy"></a>

```java
public HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList getPolicy();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.policyInput"></a>

```java
public java.lang.Object getPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy</a>>

---

##### `selectPolicyInput`<sup>Optional</sup> <a name="selectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.selectPolicyInput"></a>

```java
public java.lang.String getSelectPolicyInput();
```

- *Type:* java.lang.String

---

##### `stabilizationWindowSecondsInput`<sup>Optional</sup> <a name="stabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSecondsInput"></a>

```java
public java.lang.Number getStabilizationWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `selectPolicy`<sup>Required</sup> <a name="selectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.selectPolicy"></a>

```java
public java.lang.String getSelectPolicy();
```

- *Type:* java.lang.String

---

##### `stabilizationWindowSeconds`<sup>Required</sup> <a name="stabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.stabilizationWindowSeconds"></a>

```java
public java.lang.Number getStabilizationWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDown">HorizontalPodAutoscalerV2SpecBehaviorScaleDown</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList;

new HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy</a>>

---


### HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference;

new HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleDownPolicy</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecBehaviorScaleUpList <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleUpList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList;

new HorizontalPodAutoscalerV2SpecBehaviorScaleUpList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp">HorizontalPodAutoscalerV2SpecBehaviorScaleUp</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp">HorizontalPodAutoscalerV2SpecBehaviorScaleUp</a>>

---


### HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference;

new HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.putPolicy">putPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.resetSelectPolicy">resetSelectPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds">resetStabilizationWindowSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicy` <a name="putPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.putPolicy"></a>

```java
public void putPolicy(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.putPolicy.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy</a>>

---

##### `resetSelectPolicy` <a name="resetSelectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.resetSelectPolicy"></a>

```java
public void resetSelectPolicy()
```

##### `resetStabilizationWindowSeconds` <a name="resetStabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.resetStabilizationWindowSeconds"></a>

```java
public void resetStabilizationWindowSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.policy">policy</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.policyInput">policyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.selectPolicyInput">selectPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput">stabilizationWindowSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.selectPolicy">selectPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds">stabilizationWindowSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp">HorizontalPodAutoscalerV2SpecBehaviorScaleUp</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policy`<sup>Required</sup> <a name="policy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.policy"></a>

```java
public HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList getPolicy();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList</a>

---

##### `policyInput`<sup>Optional</sup> <a name="policyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.policyInput"></a>

```java
public java.lang.Object getPolicyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy</a>>

---

##### `selectPolicyInput`<sup>Optional</sup> <a name="selectPolicyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.selectPolicyInput"></a>

```java
public java.lang.String getSelectPolicyInput();
```

- *Type:* java.lang.String

---

##### `stabilizationWindowSecondsInput`<sup>Optional</sup> <a name="stabilizationWindowSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSecondsInput"></a>

```java
public java.lang.Number getStabilizationWindowSecondsInput();
```

- *Type:* java.lang.Number

---

##### `selectPolicy`<sup>Required</sup> <a name="selectPolicy" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.selectPolicy"></a>

```java
public java.lang.String getSelectPolicy();
```

- *Type:* java.lang.String

---

##### `stabilizationWindowSeconds`<sup>Required</sup> <a name="stabilizationWindowSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.stabilizationWindowSeconds"></a>

```java
public java.lang.Number getStabilizationWindowSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUp">HorizontalPodAutoscalerV2SpecBehaviorScaleUp</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList;

new HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy</a>>

---


### HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference <a name="HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference;

new HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput">periodSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds">periodSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `periodSecondsInput`<sup>Optional</sup> <a name="periodSecondsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.periodSecondsInput"></a>

```java
public java.lang.Number getPeriodSecondsInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `periodSeconds`<sup>Required</sup> <a name="periodSeconds" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.periodSeconds"></a>

```java
public java.lang.Number getPeriodSeconds();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy">HorizontalPodAutoscalerV2SpecBehaviorScaleUpPolicy</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference;

new HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.containerInput">containerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.container">container</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource">HorizontalPodAutoscalerV2SpecMetricContainerResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.containerInput"></a>

```java
public java.lang.String getContainerInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.container"></a>

```java
public java.lang.String getContainer();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricContainerResource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource">HorizontalPodAutoscalerV2SpecMetricContainerResource</a>

---


### HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference;

new HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget">HorizontalPodAutoscalerV2SpecMetricContainerResourceTarget</a>

---


### HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference;

new HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.resetSelector">resetSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.putSelector"></a>

```java
public void putSelector(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector</a>>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.resetSelector"></a>

```java
public void resetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.selectorInput">selectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric">HorizontalPodAutoscalerV2SpecMetricExternalMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.selector"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList getSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.selectorInput"></a>

```java
public java.lang.Object getSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalMetric getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric">HorizontalPodAutoscalerV2SpecMetricExternalMetric</a>

---


### HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList <a name="HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList;

new HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector</a>>

---


### HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList;

new HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions</a>>

---


### HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference;

new HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference;

new HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressions"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector">HorizontalPodAutoscalerV2SpecMetricExternalMetricSelector</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecMetricExternalOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricExternalOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference;

new HorizontalPodAutoscalerV2SpecMetricExternalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.putMetric"></a>

```java
public void putMetric(HorizontalPodAutoscalerV2SpecMetricExternalMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric">HorizontalPodAutoscalerV2SpecMetricExternalMetric</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerV2SpecMetricExternalTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget">HorizontalPodAutoscalerV2SpecMetricExternalTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric">HorizontalPodAutoscalerV2SpecMetricExternalMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget">HorizontalPodAutoscalerV2SpecMetricExternalTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal">HorizontalPodAutoscalerV2SpecMetricExternal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.metric"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference">HorizontalPodAutoscalerV2SpecMetricExternalMetricOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.metricInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalMetric getMetricInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalMetric">HorizontalPodAutoscalerV2SpecMetricExternalMetric</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget">HorizontalPodAutoscalerV2SpecMetricExternalTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal">HorizontalPodAutoscalerV2SpecMetricExternal</a>

---


### HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference;

new HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget">HorizontalPodAutoscalerV2SpecMetricExternalTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalTarget">HorizontalPodAutoscalerV2SpecMetricExternalTarget</a>

---


### HorizontalPodAutoscalerV2SpecMetricList <a name="HorizontalPodAutoscalerV2SpecMetricList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricList;

new HorizontalPodAutoscalerV2SpecMetricList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric">HorizontalPodAutoscalerV2SpecMetric</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric">HorizontalPodAutoscalerV2SpecMetric</a>>

---


### HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference;

new HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject</a>

---


### HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference;

new HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.resetSelector">resetSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.putSelector"></a>

```java
public void putSelector(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector</a>>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.resetSelector"></a>

```java
public void resetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.selectorInput">selectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric">HorizontalPodAutoscalerV2SpecMetricObjectMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.selector"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList getSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.selectorInput"></a>

```java
public java.lang.Object getSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectMetric getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric">HorizontalPodAutoscalerV2SpecMetricObjectMetric</a>

---


### HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList <a name="HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList;

new HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector</a>>

---


### HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList;

new HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions</a>>

---


### HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference;

new HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference;

new HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressions"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector">HorizontalPodAutoscalerV2SpecMetricObjectMetricSelector</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecMetricObjectOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricObjectOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference;

new HorizontalPodAutoscalerV2SpecMetricObjectOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.putDescribedObject">putDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDescribedObject` <a name="putDescribedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.putDescribedObject"></a>

```java
public void putDescribedObject(HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.putDescribedObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject</a>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.putMetric"></a>

```java
public void putMetric(HorizontalPodAutoscalerV2SpecMetricObjectMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric">HorizontalPodAutoscalerV2SpecMetricObjectMetric</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerV2SpecMetricObjectTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget">HorizontalPodAutoscalerV2SpecMetricObjectTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.describedObject">describedObject</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.describedObjectInput">describedObjectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric">HorizontalPodAutoscalerV2SpecMetricObjectMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget">HorizontalPodAutoscalerV2SpecMetricObjectTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject">HorizontalPodAutoscalerV2SpecMetricObject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describedObject`<sup>Required</sup> <a name="describedObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.describedObject"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference getDescribedObject();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference">HorizontalPodAutoscalerV2SpecMetricObjectDescribedObjectOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.metric"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference">HorizontalPodAutoscalerV2SpecMetricObjectMetricOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference</a>

---

##### `describedObjectInput`<sup>Optional</sup> <a name="describedObjectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.describedObjectInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject getDescribedObjectInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject">HorizontalPodAutoscalerV2SpecMetricObjectDescribedObject</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.metricInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectMetric getMetricInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectMetric">HorizontalPodAutoscalerV2SpecMetricObjectMetric</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget">HorizontalPodAutoscalerV2SpecMetricObjectTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObject getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject">HorizontalPodAutoscalerV2SpecMetricObject</a>

---


### HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference;

new HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget">HorizontalPodAutoscalerV2SpecMetricObjectTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectTarget">HorizontalPodAutoscalerV2SpecMetricObjectTarget</a>

---


### HorizontalPodAutoscalerV2SpecMetricOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricOutputReference;

new HorizontalPodAutoscalerV2SpecMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putContainerResource">putContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putExternal">putExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putObject">putObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putPods">putPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putResource">putResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetContainerResource">resetContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetExternal">resetExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetObject">resetObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetPods">resetPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetResource">resetResource</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainerResource` <a name="putContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putContainerResource"></a>

```java
public void putContainerResource(HorizontalPodAutoscalerV2SpecMetricContainerResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putContainerResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource">HorizontalPodAutoscalerV2SpecMetricContainerResource</a>

---

##### `putExternal` <a name="putExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putExternal"></a>

```java
public void putExternal(HorizontalPodAutoscalerV2SpecMetricExternal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putExternal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal">HorizontalPodAutoscalerV2SpecMetricExternal</a>

---

##### `putObject` <a name="putObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putObject"></a>

```java
public void putObject(HorizontalPodAutoscalerV2SpecMetricObject value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putObject.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject">HorizontalPodAutoscalerV2SpecMetricObject</a>

---

##### `putPods` <a name="putPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putPods"></a>

```java
public void putPods(HorizontalPodAutoscalerV2SpecMetricPods value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putPods.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods">HorizontalPodAutoscalerV2SpecMetricPods</a>

---

##### `putResource` <a name="putResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putResource"></a>

```java
public void putResource(HorizontalPodAutoscalerV2SpecMetricResource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.putResource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource">HorizontalPodAutoscalerV2SpecMetricResource</a>

---

##### `resetContainerResource` <a name="resetContainerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetContainerResource"></a>

```java
public void resetContainerResource()
```

##### `resetExternal` <a name="resetExternal" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetExternal"></a>

```java
public void resetExternal()
```

##### `resetObject` <a name="resetObject" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetObject"></a>

```java
public void resetObject()
```

##### `resetPods` <a name="resetPods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetPods"></a>

```java
public void resetPods()
```

##### `resetResource` <a name="resetResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.resetResource"></a>

```java
public void resetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.containerResource">containerResource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.external">external</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference">HorizontalPodAutoscalerV2SpecMetricExternalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.object">object</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference">HorizontalPodAutoscalerV2SpecMetricObjectOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.pods">pods</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference">HorizontalPodAutoscalerV2SpecMetricPodsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.resource">resource</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference">HorizontalPodAutoscalerV2SpecMetricResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.containerResourceInput">containerResourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource">HorizontalPodAutoscalerV2SpecMetricContainerResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.externalInput">externalInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal">HorizontalPodAutoscalerV2SpecMetricExternal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.objectInput">objectInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject">HorizontalPodAutoscalerV2SpecMetricObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.podsInput">podsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods">HorizontalPodAutoscalerV2SpecMetricPods</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.resourceInput">resourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource">HorizontalPodAutoscalerV2SpecMetricResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric">HorizontalPodAutoscalerV2SpecMetric</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `containerResource`<sup>Required</sup> <a name="containerResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.containerResource"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference getContainerResource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference">HorizontalPodAutoscalerV2SpecMetricContainerResourceOutputReference</a>

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.external"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternalOutputReference getExternal();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternalOutputReference">HorizontalPodAutoscalerV2SpecMetricExternalOutputReference</a>

---

##### `object`<sup>Required</sup> <a name="object" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.object"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObjectOutputReference getObject();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObjectOutputReference">HorizontalPodAutoscalerV2SpecMetricObjectOutputReference</a>

---

##### `pods`<sup>Required</sup> <a name="pods" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.pods"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsOutputReference getPods();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference">HorizontalPodAutoscalerV2SpecMetricPodsOutputReference</a>

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.resource"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricResourceOutputReference getResource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference">HorizontalPodAutoscalerV2SpecMetricResourceOutputReference</a>

---

##### `containerResourceInput`<sup>Optional</sup> <a name="containerResourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.containerResourceInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricContainerResource getContainerResourceInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricContainerResource">HorizontalPodAutoscalerV2SpecMetricContainerResource</a>

---

##### `externalInput`<sup>Optional</sup> <a name="externalInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.externalInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricExternal getExternalInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricExternal">HorizontalPodAutoscalerV2SpecMetricExternal</a>

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.objectInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricObject getObjectInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricObject">HorizontalPodAutoscalerV2SpecMetricObject</a>

---

##### `podsInput`<sup>Optional</sup> <a name="podsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.podsInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPods getPodsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods">HorizontalPodAutoscalerV2SpecMetricPods</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.resourceInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricResource getResourceInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource">HorizontalPodAutoscalerV2SpecMetricResource</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric">HorizontalPodAutoscalerV2SpecMetric</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference;

new HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.putSelector">putSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.resetSelector">resetSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSelector` <a name="putSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.putSelector"></a>

```java
public void putSelector(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.putSelector.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector</a>>

---

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.resetSelector"></a>

```java
public void resetSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.selector">selector</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.selectorInput">selectorInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric">HorizontalPodAutoscalerV2SpecMetricPodsMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.selector"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList getSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.selectorInput"></a>

```java
public java.lang.Object getSelectorInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsMetric getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric">HorizontalPodAutoscalerV2SpecMetricPodsMetric</a>

---


### HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList <a name="HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList;

new HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector</a>>

---


### HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList <a name="HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList;

new HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.get"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions</a>>

---


### HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference;

new HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator">resetOperator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetOperator` <a name="resetOperator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetOperator"></a>

```java
public void resetOperator()
```

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference;

new HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.resetMatchLabels">resetMatchLabels</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchLabels` <a name="resetMatchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.resetMatchLabels"></a>

```java
public void resetMatchLabels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput">matchLabelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.matchLabels">matchLabels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressions"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressionsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorMatchExpressions</a>>

---

##### `matchLabelsInput`<sup>Optional</sup> <a name="matchLabelsInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.matchLabelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `matchLabels`<sup>Required</sup> <a name="matchLabels" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.matchLabels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMatchLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelectorOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector">HorizontalPodAutoscalerV2SpecMetricPodsMetricSelector</a> OR com.hashicorp.cdktf.IResolvable

---


### HorizontalPodAutoscalerV2SpecMetricPodsOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricPodsOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference;

new HorizontalPodAutoscalerV2SpecMetricPodsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.putMetric"></a>

```java
public void putMetric(HorizontalPodAutoscalerV2SpecMetricPodsMetric value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric">HorizontalPodAutoscalerV2SpecMetricPodsMetric</a>

---

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerV2SpecMetricPodsTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget">HorizontalPodAutoscalerV2SpecMetricPodsTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric">HorizontalPodAutoscalerV2SpecMetricPodsMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget">HorizontalPodAutoscalerV2SpecMetricPodsTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods">HorizontalPodAutoscalerV2SpecMetricPods</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.metric"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference">HorizontalPodAutoscalerV2SpecMetricPodsMetricOutputReference</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.metricInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsMetric getMetricInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsMetric">HorizontalPodAutoscalerV2SpecMetricPodsMetric</a>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget">HorizontalPodAutoscalerV2SpecMetricPodsTarget</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPods getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPods">HorizontalPodAutoscalerV2SpecMetricPods</a>

---


### HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference;

new HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget">HorizontalPodAutoscalerV2SpecMetricPodsTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricPodsTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricPodsTarget">HorizontalPodAutoscalerV2SpecMetricPodsTarget</a>

---


### HorizontalPodAutoscalerV2SpecMetricResourceOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricResourceOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference;

new HorizontalPodAutoscalerV2SpecMetricResourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTarget` <a name="putTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.putTarget"></a>

```java
public void putTarget(HorizontalPodAutoscalerV2SpecMetricResourceTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget">HorizontalPodAutoscalerV2SpecMetricResourceTarget</a>

---

##### `resetTarget` <a name="resetTarget" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.target">target</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.targetInput">targetInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget">HorizontalPodAutoscalerV2SpecMetricResourceTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource">HorizontalPodAutoscalerV2SpecMetricResource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.target"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference">HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.targetInput"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricResourceTarget getTargetInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget">HorizontalPodAutoscalerV2SpecMetricResourceTarget</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricResource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResource">HorizontalPodAutoscalerV2SpecMetricResource</a>

---


### HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference <a name="HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference;

new HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.resetAverageUtilization">resetAverageUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.resetAverageValue">resetAverageValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAverageUtilization` <a name="resetAverageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.resetAverageUtilization"></a>

```java
public void resetAverageUtilization()
```

##### `resetAverageValue` <a name="resetAverageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.resetAverageValue"></a>

```java
public void resetAverageValue()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.averageUtilizationInput">averageUtilizationInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.averageValueInput">averageValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.averageUtilization">averageUtilization</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.averageValue">averageValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget">HorizontalPodAutoscalerV2SpecMetricResourceTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `averageUtilizationInput`<sup>Optional</sup> <a name="averageUtilizationInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.averageUtilizationInput"></a>

```java
public java.lang.Number getAverageUtilizationInput();
```

- *Type:* java.lang.Number

---

##### `averageValueInput`<sup>Optional</sup> <a name="averageValueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.averageValueInput"></a>

```java
public java.lang.String getAverageValueInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `averageUtilization`<sup>Required</sup> <a name="averageUtilization" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.averageUtilization"></a>

```java
public java.lang.Number getAverageUtilization();
```

- *Type:* java.lang.Number

---

##### `averageValue`<sup>Required</sup> <a name="averageValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.averageValue"></a>

```java
public java.lang.String getAverageValue();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTargetOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricResourceTarget getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricResourceTarget">HorizontalPodAutoscalerV2SpecMetricResourceTarget</a>

---


### HorizontalPodAutoscalerV2SpecOutputReference <a name="HorizontalPodAutoscalerV2SpecOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecOutputReference;

new HorizontalPodAutoscalerV2SpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.putBehavior">putBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.putScaleTargetRef">putScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resetBehavior">resetBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resetMinReplicas">resetMinReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resetTargetCpuUtilizationPercentage">resetTargetCpuUtilizationPercentage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBehavior` <a name="putBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.putBehavior"></a>

```java
public void putBehavior(HorizontalPodAutoscalerV2SpecBehavior value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.putBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior">HorizontalPodAutoscalerV2SpecBehavior</a>

---

##### `putMetric` <a name="putMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.putMetric"></a>

```java
public void putMetric(IResolvable OR java.util.List<HorizontalPodAutoscalerV2SpecMetric> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.putMetric.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric">HorizontalPodAutoscalerV2SpecMetric</a>>

---

##### `putScaleTargetRef` <a name="putScaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.putScaleTargetRef"></a>

```java
public void putScaleTargetRef(HorizontalPodAutoscalerV2SpecScaleTargetRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.putScaleTargetRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef">HorizontalPodAutoscalerV2SpecScaleTargetRef</a>

---

##### `resetBehavior` <a name="resetBehavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resetBehavior"></a>

```java
public void resetBehavior()
```

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMinReplicas` <a name="resetMinReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resetMinReplicas"></a>

```java
public void resetMinReplicas()
```

##### `resetTargetCpuUtilizationPercentage` <a name="resetTargetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.resetTargetCpuUtilizationPercentage"></a>

```java
public void resetTargetCpuUtilizationPercentage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.behavior">behavior</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference">HorizontalPodAutoscalerV2SpecBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList">HorizontalPodAutoscalerV2SpecMetricList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.scaleTargetRef">scaleTargetRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.behaviorInput">behaviorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior">HorizontalPodAutoscalerV2SpecBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.maxReplicasInput">maxReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.metricInput">metricInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric">HorizontalPodAutoscalerV2SpecMetric</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.minReplicasInput">minReplicasInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.scaleTargetRefInput">scaleTargetRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef">HorizontalPodAutoscalerV2SpecScaleTargetRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.targetCpuUtilizationPercentageInput">targetCpuUtilizationPercentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.maxReplicas">maxReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.minReplicas">minReplicas</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.targetCpuUtilizationPercentage">targetCpuUtilizationPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec">HorizontalPodAutoscalerV2Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `behavior`<sup>Required</sup> <a name="behavior" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.behavior"></a>

```java
public HorizontalPodAutoscalerV2SpecBehaviorOutputReference getBehavior();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehaviorOutputReference">HorizontalPodAutoscalerV2SpecBehaviorOutputReference</a>

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.metric"></a>

```java
public HorizontalPodAutoscalerV2SpecMetricList getMetric();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetricList">HorizontalPodAutoscalerV2SpecMetricList</a>

---

##### `scaleTargetRef`<sup>Required</sup> <a name="scaleTargetRef" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.scaleTargetRef"></a>

```java
public HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference getScaleTargetRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference">HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference</a>

---

##### `behaviorInput`<sup>Optional</sup> <a name="behaviorInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.behaviorInput"></a>

```java
public HorizontalPodAutoscalerV2SpecBehavior getBehaviorInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecBehavior">HorizontalPodAutoscalerV2SpecBehavior</a>

---

##### `maxReplicasInput`<sup>Optional</sup> <a name="maxReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.maxReplicasInput"></a>

```java
public java.lang.Number getMaxReplicasInput();
```

- *Type:* java.lang.Number

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.metricInput"></a>

```java
public java.lang.Object getMetricInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecMetric">HorizontalPodAutoscalerV2SpecMetric</a>>

---

##### `minReplicasInput`<sup>Optional</sup> <a name="minReplicasInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.minReplicasInput"></a>

```java
public java.lang.Number getMinReplicasInput();
```

- *Type:* java.lang.Number

---

##### `scaleTargetRefInput`<sup>Optional</sup> <a name="scaleTargetRefInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.scaleTargetRefInput"></a>

```java
public HorizontalPodAutoscalerV2SpecScaleTargetRef getScaleTargetRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef">HorizontalPodAutoscalerV2SpecScaleTargetRef</a>

---

##### `targetCpuUtilizationPercentageInput`<sup>Optional</sup> <a name="targetCpuUtilizationPercentageInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.targetCpuUtilizationPercentageInput"></a>

```java
public java.lang.Number getTargetCpuUtilizationPercentageInput();
```

- *Type:* java.lang.Number

---

##### `maxReplicas`<sup>Required</sup> <a name="maxReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.maxReplicas"></a>

```java
public java.lang.Number getMaxReplicas();
```

- *Type:* java.lang.Number

---

##### `minReplicas`<sup>Required</sup> <a name="minReplicas" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.minReplicas"></a>

```java
public java.lang.Number getMinReplicas();
```

- *Type:* java.lang.Number

---

##### `targetCpuUtilizationPercentage`<sup>Required</sup> <a name="targetCpuUtilizationPercentage" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.targetCpuUtilizationPercentage"></a>

```java
public java.lang.Number getTargetCpuUtilizationPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2Spec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2Spec">HorizontalPodAutoscalerV2Spec</a>

---


### HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference <a name="HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.horizontal_pod_autoscaler_v2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference;

new HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.resetApiVersion">resetApiVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiVersion` <a name="resetApiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.resetApiVersion"></a>

```java
public void resetApiVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.apiVersionInput">apiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.apiVersion">apiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef">HorizontalPodAutoscalerV2SpecScaleTargetRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiVersionInput`<sup>Optional</sup> <a name="apiVersionInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.apiVersionInput"></a>

```java
public java.lang.String getApiVersionInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `apiVersion`<sup>Required</sup> <a name="apiVersion" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.apiVersion"></a>

```java
public java.lang.String getApiVersion();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRefOutputReference.property.internalValue"></a>

```java
public HorizontalPodAutoscalerV2SpecScaleTargetRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.horizontalPodAutoscalerV2.HorizontalPodAutoscalerV2SpecScaleTargetRef">HorizontalPodAutoscalerV2SpecScaleTargetRef</a>

---



