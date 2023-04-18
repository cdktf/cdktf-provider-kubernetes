# `kubernetes_persistent_volume_v1`

Refer to the Terraform Registory for docs: [`kubernetes_persistent_volume_v1`](https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1).

# `persistentVolumeV1` Submodule <a name="`persistentVolumeV1` Submodule" id="@cdktf/provider-kubernetes.persistentVolumeV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolumeV1 <a name="PersistentVolumeV1" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1 kubernetes_persistent_volume_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1;

PersistentVolumeV1.Builder.create(Construct scope, java.lang.String id)
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
    .metadata(PersistentVolumeV1Metadata)
    .spec(IResolvable)
    .spec(java.util.List<PersistentVolumeV1Spec>)
//  .id(java.lang.String)
//  .timeouts(PersistentVolumeV1Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.spec">spec</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#id PersistentVolumeV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#metadata PersistentVolumeV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.spec"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#spec PersistentVolumeV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#id PersistentVolumeV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#timeouts PersistentVolumeV1#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putMetadata"></a>

```java
public void putMetadata(PersistentVolumeV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putSpec"></a>

```java
public void putSpec(IResolvable OR java.util.List<PersistentVolumeV1Spec> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putSpec.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putTimeouts"></a>

```java
public void putTimeouts(PersistentVolumeV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1;

PersistentVolumeV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1;

PersistentVolumeV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1;

PersistentVolumeV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference">PersistentVolumeV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList">PersistentVolumeV1SpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference">PersistentVolumeV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.specInput">specInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.metadata"></a>

```java
public PersistentVolumeV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference">PersistentVolumeV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.spec"></a>

```java
public PersistentVolumeV1SpecList getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList">PersistentVolumeV1SpecList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.timeouts"></a>

```java
public PersistentVolumeV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference">PersistentVolumeV1TimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.metadataInput"></a>

```java
public PersistentVolumeV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.specInput"></a>

```java
public java.lang.Object getSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeV1Config <a name="PersistentVolumeV1Config" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1Config;

PersistentVolumeV1Config.builder()
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
    .metadata(PersistentVolumeV1Metadata)
    .spec(IResolvable)
    .spec(java.util.List<PersistentVolumeV1Spec>)
//  .id(java.lang.String)
//  .timeouts(PersistentVolumeV1Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.spec">spec</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#id PersistentVolumeV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.metadata"></a>

```java
public PersistentVolumeV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#metadata PersistentVolumeV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.spec"></a>

```java
public java.lang.Object getSpec();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#spec PersistentVolumeV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#id PersistentVolumeV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Config.property.timeouts"></a>

```java
public PersistentVolumeV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#timeouts PersistentVolumeV1#timeouts}

---

### PersistentVolumeV1Metadata <a name="PersistentVolumeV1Metadata" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1Metadata;

PersistentVolumeV1Metadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the persistent volume, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata.

More info: http://kubernetes.io/docs/user-guide/annotations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#annotations PersistentVolumeV1#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume.

May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#labels PersistentVolumeV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the persistent volume, must be unique. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

### PersistentVolumeV1Spec <a name="PersistentVolumeV1Spec" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1Spec;

PersistentVolumeV1Spec.builder()
    .accessModes(java.util.List<java.lang.String>)
    .capacity(java.util.Map<java.lang.String, java.lang.String>)
    .persistentVolumeSource(PersistentVolumeV1SpecPersistentVolumeSource)
//  .claimRef(PersistentVolumeV1SpecClaimRef)
//  .mountOptions(java.util.List<java.lang.String>)
//  .nodeAffinity(PersistentVolumeV1SpecNodeAffinity)
//  .persistentVolumeReclaimPolicy(java.lang.String)
//  .storageClassName(java.lang.String)
//  .volumeMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.accessModes">accessModes</a></code> | <code>java.util.List<java.lang.String></code> | Contains all ways the volume can be mounted. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.capacity">capacity</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A description of the persistent volume's resources and capacity. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.persistentVolumeSource">persistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a></code> | persistent_volume_source block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.claimRef">claimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a></code> | claim_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.nodeAffinity">nodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a></code> | node_affinity block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.persistentVolumeReclaimPolicy">persistentVolumeReclaimPolicy</a></code> | <code>java.lang.String</code> | What happens to a persistent volume when released from its claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.volumeMode">volumeMode</a></code> | <code>java.lang.String</code> | Defines if a volume is intended to be used with a formatted filesystem. |

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.accessModes"></a>

```java
public java.util.List<java.lang.String> getAccessModes();
```

- *Type:* java.util.List<java.lang.String>

Contains all ways the volume can be mounted. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#access_modes PersistentVolumeV1#access_modes}

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.capacity"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacity();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A description of the persistent volume's resources and capacity. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#capacity PersistentVolumeV1#capacity}

---

##### `persistentVolumeSource`<sup>Required</sup> <a name="persistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.persistentVolumeSource"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSource getPersistentVolumeSource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a>

persistent_volume_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#persistent_volume_source PersistentVolumeV1#persistent_volume_source}

---

##### `claimRef`<sup>Optional</sup> <a name="claimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.claimRef"></a>

```java
public PersistentVolumeV1SpecClaimRef getClaimRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a>

claim_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#claim_ref PersistentVolumeV1#claim_ref}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#mount_options PersistentVolumeV1#mount_options}

---

##### `nodeAffinity`<sup>Optional</sup> <a name="nodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.nodeAffinity"></a>

```java
public PersistentVolumeV1SpecNodeAffinity getNodeAffinity();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a>

node_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#node_affinity PersistentVolumeV1#node_affinity}

---

##### `persistentVolumeReclaimPolicy`<sup>Optional</sup> <a name="persistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.persistentVolumeReclaimPolicy"></a>

```java
public java.lang.String getPersistentVolumeReclaimPolicy();
```

- *Type:* java.lang.String

What happens to a persistent volume when released from its claim.

Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: http://kubernetes.io/docs/user-guide/persistent-volumes#recycling-policy

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#persistent_volume_reclaim_policy PersistentVolumeV1#persistent_volume_reclaim_policy}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#storage_class_name PersistentVolumeV1#storage_class_name}

---

##### `volumeMode`<sup>Optional</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec.property.volumeMode"></a>

```java
public java.lang.String getVolumeMode();
```

- *Type:* java.lang.String

Defines if a volume is intended to be used with a formatted filesystem.

or to remain in raw block state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#volume_mode PersistentVolumeV1#volume_mode}

---

### PersistentVolumeV1SpecClaimRef <a name="PersistentVolumeV1SpecClaimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecClaimRef;

PersistentVolumeV1SpecClaimRef.builder()
    .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.property.name">name</a></code> | <code>java.lang.String</code> | The name of the PersistentVolumeClaim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the PersistentVolumeClaim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecNodeAffinity <a name="PersistentVolumeV1SpecNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinity;

PersistentVolumeV1SpecNodeAffinity.builder()
//  .required(PersistentVolumeV1SpecNodeAffinityRequired)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a></code> | required block. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity.property.required"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequired getRequired();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#required PersistentVolumeV1#required}

---

### PersistentVolumeV1SpecNodeAffinityRequired <a name="PersistentVolumeV1SpecNodeAffinityRequired" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequired;

PersistentVolumeV1SpecNodeAffinityRequired.builder()
    .nodeSelectorTerm(IResolvable)
    .nodeSelectorTerm(java.util.List<PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired.property.nodeSelectorTerm">nodeSelectorTerm</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>></code> | node_selector_term block. |

---

##### `nodeSelectorTerm`<sup>Required</sup> <a name="nodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired.property.nodeSelectorTerm"></a>

```java
public java.lang.Object getNodeSelectorTerm();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>>

node_selector_term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#node_selector_term PersistentVolumeV1#node_selector_term}

---

### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm;

PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions>)
//  .matchFields(IResolvable)
//  .matchFields(java.util.List<PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields">matchFields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>></code> | match_fields block. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#match_expressions PersistentVolumeV1#match_expressions}

---

##### `matchFields`<sup>Optional</sup> <a name="matchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields"></a>

```java
public java.lang.Object getMatchFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>>

match_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#match_fields PersistentVolumeV1#match_fields}

---

### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions;

PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.builder()
    .key(java.lang.String)
    .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#key PersistentVolumeV1#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#operator PersistentVolumeV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#values PersistentVolumeV1#values}

---

### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields;

PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.builder()
    .key(java.lang.String)
    .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#key PersistentVolumeV1#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#operator PersistentVolumeV1#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#values PersistentVolumeV1#values}

---

### PersistentVolumeV1SpecPersistentVolumeSource <a name="PersistentVolumeV1SpecPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSource;

PersistentVolumeV1SpecPersistentVolumeSource.builder()
//  .awsElasticBlockStore(PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore)
//  .azureDisk(PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk)
//  .azureFile(PersistentVolumeV1SpecPersistentVolumeSourceAzureFile)
//  .cephFs(PersistentVolumeV1SpecPersistentVolumeSourceCephFs)
//  .cinder(PersistentVolumeV1SpecPersistentVolumeSourceCinder)
//  .csi(PersistentVolumeV1SpecPersistentVolumeSourceCsi)
//  .fc(PersistentVolumeV1SpecPersistentVolumeSourceFc)
//  .flexVolume(PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume)
//  .flocker(PersistentVolumeV1SpecPersistentVolumeSourceFlocker)
//  .gcePersistentDisk(PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk)
//  .glusterfs(PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs)
//  .hostPath(PersistentVolumeV1SpecPersistentVolumeSourceHostPath)
//  .iscsi(PersistentVolumeV1SpecPersistentVolumeSourceIscsi)
//  .local(PersistentVolumeV1SpecPersistentVolumeSourceLocal)
//  .nfs(PersistentVolumeV1SpecPersistentVolumeSourceNfs)
//  .photonPersistentDisk(PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk)
//  .quobyte(PersistentVolumeV1SpecPersistentVolumeSourceQuobyte)
//  .rbd(PersistentVolumeV1SpecPersistentVolumeSourceRbd)
//  .vsphereVolume(PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.awsElasticBlockStore">awsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | aws_elastic_block_store block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.azureDisk">azureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a></code> | azure_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.azureFile">azureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a></code> | azure_file block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.cephFs">cephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a></code> | ceph_fs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a></code> | cinder block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a></code> | csi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a></code> | fc block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.flexVolume">flexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a></code> | flex_volume block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a></code> | flocker block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.gcePersistentDisk">gcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a></code> | gce_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a></code> | glusterfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a></code> | host_path block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a></code> | iscsi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.photonPersistentDisk">photonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | photon_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a></code> | quobyte block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a></code> | rbd block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.vsphereVolume">vsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a></code> | vsphere_volume block. |

---

##### `awsElasticBlockStore`<sup>Optional</sup> <a name="awsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.awsElasticBlockStore"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore getAwsElasticBlockStore();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a>

aws_elastic_block_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#aws_elastic_block_store PersistentVolumeV1#aws_elastic_block_store}

---

##### `azureDisk`<sup>Optional</sup> <a name="azureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.azureDisk"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk getAzureDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a>

azure_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#azure_disk PersistentVolumeV1#azure_disk}

---

##### `azureFile`<sup>Optional</sup> <a name="azureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.azureFile"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAzureFile getAzureFile();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a>

azure_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#azure_file PersistentVolumeV1#azure_file}

---

##### `cephFs`<sup>Optional</sup> <a name="cephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.cephFs"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCephFs getCephFs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a>

ceph_fs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#ceph_fs PersistentVolumeV1#ceph_fs}

---

##### `cinder`<sup>Optional</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.cinder"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCinder getCinder();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a>

cinder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#cinder PersistentVolumeV1#cinder}

---

##### `csi`<sup>Optional</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.csi"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsi getCsi();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a>

csi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#csi PersistentVolumeV1#csi}

---

##### `fc`<sup>Optional</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.fc"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFc getFc();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a>

fc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fc PersistentVolumeV1#fc}

---

##### `flexVolume`<sup>Optional</sup> <a name="flexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.flexVolume"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume getFlexVolume();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a>

flex_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#flex_volume PersistentVolumeV1#flex_volume}

---

##### `flocker`<sup>Optional</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.flocker"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlocker getFlocker();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a>

flocker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#flocker PersistentVolumeV1#flocker}

---

##### `gcePersistentDisk`<sup>Optional</sup> <a name="gcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.gcePersistentDisk"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk getGcePersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a>

gce_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#gce_persistent_disk PersistentVolumeV1#gce_persistent_disk}

---

##### `glusterfs`<sup>Optional</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.glusterfs"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs getGlusterfs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a>

glusterfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#glusterfs PersistentVolumeV1#glusterfs}

---

##### `hostPath`<sup>Optional</sup> <a name="hostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.hostPath"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceHostPath getHostPath();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a>

host_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#host_path PersistentVolumeV1#host_path}

---

##### `iscsi`<sup>Optional</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.iscsi"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceIscsi getIscsi();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a>

iscsi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#iscsi PersistentVolumeV1#iscsi}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.local"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceLocal getLocal();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#local PersistentVolumeV1#local}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.nfs"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceNfs getNfs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#nfs PersistentVolumeV1#nfs}

---

##### `photonPersistentDisk`<sup>Optional</sup> <a name="photonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.photonPersistentDisk"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk getPhotonPersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a>

photon_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#photon_persistent_disk PersistentVolumeV1#photon_persistent_disk}

---

##### `quobyte`<sup>Optional</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.quobyte"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceQuobyte getQuobyte();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a>

quobyte block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#quobyte PersistentVolumeV1#quobyte}

---

##### `rbd`<sup>Optional</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.rbd"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceRbd getRbd();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a>

rbd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#rbd PersistentVolumeV1#rbd}

---

##### `vsphereVolume`<sup>Optional</sup> <a name="vsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource.property.vsphereVolume"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume getVsphereVolume();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a>

vsphere_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#vsphere_volume PersistentVolumeV1#vsphere_volume}

---

### PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore <a name="PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore;

PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.builder()
    .volumeId(java.lang.String)
//  .fsType(java.lang.String)
//  .partition(java.lang.Number)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.partition">partition</a></code> | <code>java.lang.Number</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#volume_id PersistentVolumeV1#volume_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#partition PersistentVolumeV1#partition}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk <a name="PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk;

PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.builder()
    .cachingMode(java.lang.String)
    .dataDiskUri(java.lang.String)
    .diskName(java.lang.String)
//  .fsType(java.lang.String)
//  .kind(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.cachingMode">cachingMode</a></code> | <code>java.lang.String</code> | Host Caching mode: None, Read Only, Read Write. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.dataDiskUri">dataDiskUri</a></code> | <code>java.lang.String</code> | The URI the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.diskName">diskName</a></code> | <code>java.lang.String</code> | The Name of the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.kind">kind</a></code> | <code>java.lang.String</code> | The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `cachingMode`<sup>Required</sup> <a name="cachingMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.cachingMode"></a>

```java
public java.lang.String getCachingMode();
```

- *Type:* java.lang.String

Host Caching mode: None, Read Only, Read Write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#caching_mode PersistentVolumeV1#caching_mode}

---

##### `dataDiskUri`<sup>Required</sup> <a name="dataDiskUri" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.dataDiskUri"></a>

```java
public java.lang.String getDataDiskUri();
```

- *Type:* java.lang.String

The URI the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#data_disk_uri PersistentVolumeV1#data_disk_uri}

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

The Name of the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#disk_name PersistentVolumeV1#disk_name}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#kind PersistentVolumeV1#kind}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceAzureFile <a name="PersistentVolumeV1SpecPersistentVolumeSourceAzureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile;

PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.builder()
    .secretName(java.lang.String)
    .shareName(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secretNamespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.secretName">secretName</a></code> | <code>java.lang.String</code> | The name of secret that contains Azure Storage Account Name and Key. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Share Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.secretNamespace">secretNamespace</a></code> | <code>java.lang.String</code> | The namespace of the secret that contains Azure Storage Account Name and Key. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

The name of secret that contains Azure Storage Account Name and Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#secret_name PersistentVolumeV1#secret_name}

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Share Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#share_name PersistentVolumeV1#share_name}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `secretNamespace`<sup>Optional</sup> <a name="secretNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile.property.secretNamespace"></a>

```java
public java.lang.String getSecretNamespace();
```

- *Type:* java.lang.String

The namespace of the secret that contains Azure Storage Account Name and Key.

For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#secret_namespace PersistentVolumeV1#secret_namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCephFs <a name="PersistentVolumeV1SpecPersistentVolumeSourceCephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs;

PersistentVolumeV1SpecPersistentVolumeSourceCephFs.builder()
    .monitors(java.util.List<java.lang.String>)
//  .path(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secretFile(java.lang.String)
//  .secretRef(PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.monitors">monitors</a></code> | <code>java.util.List<java.lang.String></code> | Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.path">path</a></code> | <code>java.lang.String</code> | Used as the mounted root, rather than the full Ceph tree, default is /. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.secretFile">secretFile</a></code> | <code>java.lang.String</code> | The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a></code> | secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.user">user</a></code> | <code>java.lang.String</code> | User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it. |

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.monitors"></a>

```java
public java.util.List<java.lang.String> getMonitors();
```

- *Type:* java.util.List<java.lang.String>

Monitors is a collection of Ceph monitors More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#monitors PersistentVolumeV1#monitors}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Used as the mounted root, rather than the full Ceph tree, default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `secretFile`<sup>Optional</sup> <a name="secretFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.secretFile"></a>

```java
public java.lang.String getSecretFile();
```

- *Type:* java.lang.String

The path to key ring for User, default is /etc/ceph/user.secret More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#secret_file PersistentVolumeV1#secret_file}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.secretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#secret_ref PersistentVolumeV1#secret_ref}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

User is the rados user name, default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#user PersistentVolumeV1#user}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef;

PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCinder <a name="PersistentVolumeV1SpecPersistentVolumeSourceCinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCinder;

PersistentVolumeV1SpecPersistentVolumeSourceCinder.builder()
    .volumeId(java.lang.String)
//  .fsType(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Volume ID used to identify the volume in Cinder. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#volume_id PersistentVolumeV1#volume_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: http://releases.k8s.io/HEAD/examples/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsi <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsi;

PersistentVolumeV1SpecPersistentVolumeSourceCsi.builder()
    .driver(java.lang.String)
    .volumeHandle(java.lang.String)
//  .controllerExpandSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef)
//  .controllerPublishSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef)
//  .fsType(java.lang.String)
//  .nodePublishSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef)
//  .nodeStageSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .volumeAttributes(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.driver">driver</a></code> | <code>java.lang.String</code> | the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.volumeHandle">volumeHandle</a></code> | <code>java.lang.String</code> | A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef">controllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | controller_expand_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef">controllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | controller_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.nodePublishSecretRef">nodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | node_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.nodeStageSecretRef">nodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | node_stage_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.volumeAttributes">volumeAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Attributes of the volume to publish. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#driver PersistentVolumeV1#driver}

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.volumeHandle"></a>

```java
public java.lang.String getVolumeHandle();
```

- *Type:* java.lang.String

A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#volume_handle PersistentVolumeV1#volume_handle}

---

##### `controllerExpandSecretRef`<sup>Optional</sup> <a name="controllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef getControllerExpandSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

controller_expand_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#controller_expand_secret_ref PersistentVolumeV1#controller_expand_secret_ref}

---

##### `controllerPublishSecretRef`<sup>Optional</sup> <a name="controllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef getControllerPublishSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

controller_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#controller_publish_secret_ref PersistentVolumeV1#controller_publish_secret_ref}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `nodePublishSecretRef`<sup>Optional</sup> <a name="nodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.nodePublishSecretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef getNodePublishSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

node_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#node_publish_secret_ref PersistentVolumeV1#node_publish_secret_ref}

---

##### `nodeStageSecretRef`<sup>Optional</sup> <a name="nodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.nodeStageSecretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef getNodeStageSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

node_stage_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#node_stage_secret_ref PersistentVolumeV1#node_stage_secret_ref}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: http://kubernetes.io/docs/user-guide/volumes#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `volumeAttributes`<sup>Optional</sup> <a name="volumeAttributes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi.property.volumeAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Attributes of the volume to publish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#volume_attributes PersistentVolumeV1#volume_attributes}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef;

PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef;

PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef;

PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef;

PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceFc <a name="PersistentVolumeV1SpecPersistentVolumeSourceFc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceFc;

PersistentVolumeV1SpecPersistentVolumeSourceFc.builder()
    .lun(java.lang.Number)
    .targetWwNs(java.util.List<java.lang.String>)
//  .fsType(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.lun">lun</a></code> | <code>java.lang.Number</code> | FC target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.targetWwNs">targetWwNs</a></code> | <code>java.util.List<java.lang.String></code> | FC target worldwide names (WWNs). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

FC target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#lun PersistentVolumeV1#lun}

---

##### `targetWwNs`<sup>Required</sup> <a name="targetWwNs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.targetWwNs"></a>

```java
public java.util.List<java.lang.String> getTargetWwNs();
```

- *Type:* java.util.List<java.lang.String>

FC target worldwide names (WWNs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#target_ww_ns PersistentVolumeV1#target_ww_ns}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume;

PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.builder()
    .driver(java.lang.String)
//  .fsType(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secretRef(PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.driver">driver</a></code> | <code>java.lang.String</code> | Driver is the name of the driver to use for this volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Extra command options if any. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | secret_ref block. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

Driver is the name of the driver to use for this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#driver PersistentVolumeV1#driver}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Extra command options if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#options PersistentVolumeV1#options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume.property.secretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#secret_ref PersistentVolumeV1#secret_ref}

---

### PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef;

PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceFlocker <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker;

PersistentVolumeV1SpecPersistentVolumeSourceFlocker.builder()
//  .datasetName(java.lang.String)
//  .datasetUuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.property.datasetUuid">datasetUuid</a></code> | <code>java.lang.String</code> | UUID of the dataset. This is unique identifier of a Flocker dataset. |

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#dataset_name PersistentVolumeV1#dataset_name}

---

##### `datasetUuid`<sup>Optional</sup> <a name="datasetUuid" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker.property.datasetUuid"></a>

```java
public java.lang.String getDatasetUuid();
```

- *Type:* java.lang.String

UUID of the dataset. This is unique identifier of a Flocker dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#dataset_uuid PersistentVolumeV1#dataset_uuid}

---

### PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk <a name="PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk;

PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.builder()
    .pdName(java.lang.String)
//  .fsType(java.lang.String)
//  .partition(java.lang.Number)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.pdName">pdName</a></code> | <code>java.lang.String</code> | Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.partition">partition</a></code> | <code>java.lang.Number</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk. |

---

##### `pdName`<sup>Required</sup> <a name="pdName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.pdName"></a>

```java
public java.lang.String getPdName();
```

- *Type:* java.lang.String

Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#pd_name PersistentVolumeV1#pd_name}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#partition PersistentVolumeV1#partition}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs <a name="PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs;

PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.builder()
    .endpointsName(java.lang.String)
    .path(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.endpointsName">endpointsName</a></code> | <code>java.lang.String</code> | The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.path">path</a></code> | <code>java.lang.String</code> | The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod. |

---

##### `endpointsName`<sup>Required</sup> <a name="endpointsName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.endpointsName"></a>

```java
public java.lang.String getEndpointsName();
```

- *Type:* java.lang.String

The endpoint name that details Glusterfs topology. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#endpoints_name PersistentVolumeV1#endpoints_name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The Glusterfs volume path. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceHostPath <a name="PersistentVolumeV1SpecPersistentVolumeSourceHostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath;

PersistentVolumeV1SpecPersistentVolumeSourceHostPath.builder()
//  .path(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.property.path">path</a></code> | <code>java.lang.String</code> | Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.property.type">type</a></code> | <code>java.lang.String</code> | Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#hostpath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#type PersistentVolumeV1#type}

---

### PersistentVolumeV1SpecPersistentVolumeSourceIscsi <a name="PersistentVolumeV1SpecPersistentVolumeSourceIscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi;

PersistentVolumeV1SpecPersistentVolumeSourceIscsi.builder()
    .iqn(java.lang.String)
    .targetPortal(java.lang.String)
//  .fsType(java.lang.String)
//  .iscsiInterface(java.lang.String)
//  .lun(java.lang.Number)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.iqn">iqn</a></code> | <code>java.lang.String</code> | Target iSCSI Qualified Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.targetPortal">targetPortal</a></code> | <code>java.lang.String</code> | iSCSI target portal. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.iscsiInterface">iscsiInterface</a></code> | <code>java.lang.String</code> | iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.lun">lun</a></code> | <code>java.lang.Number</code> | iSCSI target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. |

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.iqn"></a>

```java
public java.lang.String getIqn();
```

- *Type:* java.lang.String

Target iSCSI Qualified Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#iqn PersistentVolumeV1#iqn}

---

##### `targetPortal`<sup>Required</sup> <a name="targetPortal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.targetPortal"></a>

```java
public java.lang.String getTargetPortal();
```

- *Type:* java.lang.String

iSCSI target portal.

The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#target_portal PersistentVolumeV1#target_portal}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#iscsi

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `iscsiInterface`<sup>Optional</sup> <a name="iscsiInterface" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.iscsiInterface"></a>

```java
public java.lang.String getIscsiInterface();
```

- *Type:* java.lang.String

iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#iscsi_interface PersistentVolumeV1#iscsi_interface}

---

##### `lun`<sup>Optional</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

iSCSI target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#lun PersistentVolumeV1#lun}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourceLocal <a name="PersistentVolumeV1SpecPersistentVolumeSourceLocal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceLocal;

PersistentVolumeV1SpecPersistentVolumeSourceLocal.builder()
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal.property.path">path</a></code> | <code>java.lang.String</code> | Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the directory on the host. More info: http://kubernetes.io/docs/user-guide/volumes#local.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

### PersistentVolumeV1SpecPersistentVolumeSourceNfs <a name="PersistentVolumeV1SpecPersistentVolumeSourceNfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceNfs;

PersistentVolumeV1SpecPersistentVolumeSourceNfs.builder()
    .path(java.lang.String)
    .server(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.path">path</a></code> | <code>java.lang.String</code> | Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.server">server</a></code> | <code>java.lang.String</code> | Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path that is exported by the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#path PersistentVolumeV1#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Server is the hostname or IP address of the NFS server. More info: http://kubernetes.io/docs/user-guide/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#server PersistentVolumeV1#server}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: http://kubernetes.io/docs/user-guide/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

### PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk <a name="PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk;

PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.builder()
    .pdId(java.lang.String)
//  .fsType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId">pdId</a></code> | <code>java.lang.String</code> | ID that identifies Photon Controller persistent disk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |

---

##### `pdId`<sup>Required</sup> <a name="pdId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId"></a>

```java
public java.lang.String getPdId();
```

- *Type:* java.lang.String

ID that identifies Photon Controller persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#pd_id PersistentVolumeV1#pd_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

### PersistentVolumeV1SpecPersistentVolumeSourceQuobyte <a name="PersistentVolumeV1SpecPersistentVolumeSourceQuobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte;

PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.builder()
    .registry(java.lang.String)
    .volume(java.lang.String)
//  .group(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.registry">registry</a></code> | <code>java.lang.String</code> | Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.volume">volume</a></code> | <code>java.lang.String</code> | Volume is a string that references an already created Quobyte volume by name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.group">group</a></code> | <code>java.lang.String</code> | Group to map volume access to Default is no group. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.user">user</a></code> | <code>java.lang.String</code> | User to map volume access to Defaults to serivceaccount user. |

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#registry PersistentVolumeV1#registry}

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

Volume is a string that references an already created Quobyte volume by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#volume PersistentVolumeV1#volume}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Group to map volume access to Default is no group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#group PersistentVolumeV1#group}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

User to map volume access to Defaults to serivceaccount user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#user PersistentVolumeV1#user}

---

### PersistentVolumeV1SpecPersistentVolumeSourceRbd <a name="PersistentVolumeV1SpecPersistentVolumeSourceRbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceRbd;

PersistentVolumeV1SpecPersistentVolumeSourceRbd.builder()
    .cephMonitors(java.util.List<java.lang.String>)
    .rbdImage(java.lang.String)
//  .fsType(java.lang.String)
//  .keyring(java.lang.String)
//  .radosUser(java.lang.String)
//  .rbdPool(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secretRef(PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.cephMonitors">cephMonitors</a></code> | <code>java.util.List<java.lang.String></code> | A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.rbdImage">rbdImage</a></code> | <code>java.lang.String</code> | The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.keyring">keyring</a></code> | <code>java.lang.String</code> | Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.radosUser">radosUser</a></code> | <code>java.lang.String</code> | The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.rbdPool">rbdPool</a></code> | <code>java.lang.String</code> | The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a></code> | secret_ref block. |

---

##### `cephMonitors`<sup>Required</sup> <a name="cephMonitors" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.cephMonitors"></a>

```java
public java.util.List<java.lang.String> getCephMonitors();
```

- *Type:* java.util.List<java.lang.String>

A collection of Ceph monitors. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#ceph_monitors PersistentVolumeV1#ceph_monitors}

---

##### `rbdImage`<sup>Required</sup> <a name="rbdImage" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.rbdImage"></a>

```java
public java.lang.String getRbdImage();
```

- *Type:* java.lang.String

The rados image name. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#rbd_image PersistentVolumeV1#rbd_image}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: http://kubernetes.io/docs/user-guide/volumes#rbd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#keyring PersistentVolumeV1#keyring}

---

##### `radosUser`<sup>Optional</sup> <a name="radosUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.radosUser"></a>

```java
public java.lang.String getRadosUser();
```

- *Type:* java.lang.String

The rados user name. Default is admin. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#rados_user PersistentVolumeV1#rados_user}

---

##### `rbdPool`<sup>Optional</sup> <a name="rbdPool" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.rbdPool"></a>

```java
public java.lang.String getRbdPool();
```

- *Type:* java.lang.String

The rados pool name. Default is rbd. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#rbd_pool PersistentVolumeV1#rbd_pool}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: http://releases.k8s.io/HEAD/examples/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#read_only PersistentVolumeV1#read_only}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd.property.secretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#secret_ref PersistentVolumeV1#secret_ref}

---

### PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef <a name="PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef;

PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#name PersistentVolumeV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: http://kubernetes.io/docs/user-guide/identifiers#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#namespace PersistentVolumeV1#namespace}

---

### PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume <a name="PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume;

PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.builder()
    .volumePath(java.lang.String)
//  .fsType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.property.volumePath">volumePath</a></code> | <code>java.lang.String</code> | Path that identifies vSphere volume vmdk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.property.volumePath"></a>

```java
public java.lang.String getVolumePath();
```

- *Type:* java.lang.String

Path that identifies vSphere volume vmdk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#volume_path PersistentVolumeV1#volume_path}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#fs_type PersistentVolumeV1#fs_type}

---

### PersistentVolumeV1Timeouts <a name="PersistentVolumeV1Timeouts" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1Timeouts;

PersistentVolumeV1Timeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#create PersistentVolumeV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.19.0/docs/resources/persistent_volume_v1#create PersistentVolumeV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeV1MetadataOutputReference <a name="PersistentVolumeV1MetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1MetadataOutputReference;

new PersistentVolumeV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1MetadataOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Metadata">PersistentVolumeV1Metadata</a>

---


### PersistentVolumeV1SpecClaimRefOutputReference <a name="PersistentVolumeV1SpecClaimRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecClaimRefOutputReference;

new PersistentVolumeV1SpecClaimRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecClaimRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a>

---


### PersistentVolumeV1SpecList <a name="PersistentVolumeV1SpecList" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecList;

new PersistentVolumeV1SpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.get"></a>

```java
public PersistentVolumeV1SpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a>>

---


### PersistentVolumeV1SpecNodeAffinityOutputReference <a name="PersistentVolumeV1SpecNodeAffinityOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityOutputReference;

new PersistentVolumeV1SpecNodeAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequired` <a name="putRequired" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.putRequired"></a>

```java
public void putRequired(PersistentVolumeV1SpecNodeAffinityRequired value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a>

---

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.resetRequired"></a>

```java
public void resetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference">PersistentVolumeV1SpecNodeAffinityRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.requiredInput">requiredInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.required"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequiredOutputReference getRequired();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference">PersistentVolumeV1SpecNodeAffinityRequiredOutputReference</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.requiredInput"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequired getRequiredInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecNodeAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a>

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList;

new PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.get"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>>

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList;

new PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>>

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference;

new PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a> OR com.hashicorp.cdktf.IResolvable

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList;

new PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>>

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference;

new PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a> OR com.hashicorp.cdktf.IResolvable

---


### PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference <a name="PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference;

new PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields">putMatchFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields">resetMatchFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>>

---

##### `putMatchFields` <a name="putMatchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields"></a>

```java
public void putMatchFields(IResolvable OR java.util.List<PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchFields` <a name="resetMatchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields"></a>

```java
public void resetMatchFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields">matchFields</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput">matchFieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a>

---

##### `matchFields`<sup>Required</sup> <a name="matchFields" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList getMatchFields();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>>

---

##### `matchFieldsInput`<sup>Optional</sup> <a name="matchFieldsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput"></a>

```java
public java.lang.Object getMatchFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a> OR com.hashicorp.cdktf.IResolvable

---


### PersistentVolumeV1SpecNodeAffinityRequiredOutputReference <a name="PersistentVolumeV1SpecNodeAffinityRequiredOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference;

new PersistentVolumeV1SpecNodeAffinityRequiredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm">putNodeSelectorTerm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeSelectorTerm` <a name="putNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm"></a>

```java
public void putNodeSelectorTerm(IResolvable OR java.util.List<PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm">nodeSelectorTerm</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput">nodeSelectorTermInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeSelectorTerm`<sup>Required</sup> <a name="nodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList getNodeSelectorTerm();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTermList</a>

---

##### `nodeSelectorTermInput`<sup>Optional</sup> <a name="nodeSelectorTermInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput"></a>

```java
public java.lang.Object getNodeSelectorTermInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeV1SpecNodeAffinityRequiredNodeSelectorTerm</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequiredOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecNodeAffinityRequired getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityRequired">PersistentVolumeV1SpecNodeAffinityRequired</a>

---


### PersistentVolumeV1SpecOutputReference <a name="PersistentVolumeV1SpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecOutputReference;

new PersistentVolumeV1SpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putClaimRef">putClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putNodeAffinity">putNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putPersistentVolumeSource">putPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetClaimRef">resetClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetNodeAffinity">resetNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetPersistentVolumeReclaimPolicy">resetPersistentVolumeReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetVolumeMode">resetVolumeMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaimRef` <a name="putClaimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putClaimRef"></a>

```java
public void putClaimRef(PersistentVolumeV1SpecClaimRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putClaimRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a>

---

##### `putNodeAffinity` <a name="putNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putNodeAffinity"></a>

```java
public void putNodeAffinity(PersistentVolumeV1SpecNodeAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putNodeAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a>

---

##### `putPersistentVolumeSource` <a name="putPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putPersistentVolumeSource"></a>

```java
public void putPersistentVolumeSource(PersistentVolumeV1SpecPersistentVolumeSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.putPersistentVolumeSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a>

---

##### `resetClaimRef` <a name="resetClaimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetClaimRef"></a>

```java
public void resetClaimRef()
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetNodeAffinity` <a name="resetNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetNodeAffinity"></a>

```java
public void resetNodeAffinity()
```

##### `resetPersistentVolumeReclaimPolicy` <a name="resetPersistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetPersistentVolumeReclaimPolicy"></a>

```java
public void resetPersistentVolumeReclaimPolicy()
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetStorageClassName"></a>

```java
public void resetStorageClassName()
```

##### `resetVolumeMode` <a name="resetVolumeMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.resetVolumeMode"></a>

```java
public void resetVolumeMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.claimRef">claimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference">PersistentVolumeV1SpecClaimRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.nodeAffinity">nodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference">PersistentVolumeV1SpecNodeAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeSource">persistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.accessModesInput">accessModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.capacityInput">capacityInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.claimRefInput">claimRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.nodeAffinityInput">nodeAffinityInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeReclaimPolicyInput">persistentVolumeReclaimPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeSourceInput">persistentVolumeSourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.volumeModeInput">volumeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.accessModes">accessModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.capacity">capacity</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeReclaimPolicy">persistentVolumeReclaimPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.volumeMode">volumeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `claimRef`<sup>Required</sup> <a name="claimRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.claimRef"></a>

```java
public PersistentVolumeV1SpecClaimRefOutputReference getClaimRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRefOutputReference">PersistentVolumeV1SpecClaimRefOutputReference</a>

---

##### `nodeAffinity`<sup>Required</sup> <a name="nodeAffinity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.nodeAffinity"></a>

```java
public PersistentVolumeV1SpecNodeAffinityOutputReference getNodeAffinity();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinityOutputReference">PersistentVolumeV1SpecNodeAffinityOutputReference</a>

---

##### `persistentVolumeSource`<sup>Required</sup> <a name="persistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeSource"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceOutputReference getPersistentVolumeSource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceOutputReference</a>

---

##### `accessModesInput`<sup>Optional</sup> <a name="accessModesInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.accessModesInput"></a>

```java
public java.util.List<java.lang.String> getAccessModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.capacityInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacityInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `claimRefInput`<sup>Optional</sup> <a name="claimRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.claimRefInput"></a>

```java
public PersistentVolumeV1SpecClaimRef getClaimRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecClaimRef">PersistentVolumeV1SpecClaimRef</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.mountOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMountOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodeAffinityInput`<sup>Optional</sup> <a name="nodeAffinityInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.nodeAffinityInput"></a>

```java
public PersistentVolumeV1SpecNodeAffinity getNodeAffinityInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecNodeAffinity">PersistentVolumeV1SpecNodeAffinity</a>

---

##### `persistentVolumeReclaimPolicyInput`<sup>Optional</sup> <a name="persistentVolumeReclaimPolicyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeReclaimPolicyInput"></a>

```java
public java.lang.String getPersistentVolumeReclaimPolicyInput();
```

- *Type:* java.lang.String

---

##### `persistentVolumeSourceInput`<sup>Optional</sup> <a name="persistentVolumeSourceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeSourceInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSource getPersistentVolumeSourceInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a>

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.storageClassNameInput"></a>

```java
public java.lang.String getStorageClassNameInput();
```

- *Type:* java.lang.String

---

##### `volumeModeInput`<sup>Optional</sup> <a name="volumeModeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.volumeModeInput"></a>

```java
public java.lang.String getVolumeModeInput();
```

- *Type:* java.lang.String

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.accessModes"></a>

```java
public java.util.List<java.lang.String> getAccessModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.capacity"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacity();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `persistentVolumeReclaimPolicy`<sup>Required</sup> <a name="persistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.persistentVolumeReclaimPolicy"></a>

```java
public java.lang.String getPersistentVolumeReclaimPolicy();
```

- *Type:* java.lang.String

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

---

##### `volumeMode`<sup>Required</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.volumeMode"></a>

```java
public java.lang.String getVolumeMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Spec">PersistentVolumeV1Spec</a> OR com.hashicorp.cdktf.IResolvable

---


### PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition">partition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput"></a>

```java
public java.lang.Number getPartitionInput();
```

- *Type:* java.lang.Number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetKind"></a>

```java
public void resetKind()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput">cachingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput">dataDiskUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput">diskNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode">cachingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri">dataDiskUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName">diskName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachingModeInput`<sup>Optional</sup> <a name="cachingModeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput"></a>

```java
public java.lang.String getCachingModeInput();
```

- *Type:* java.lang.String

---

##### `dataDiskUriInput`<sup>Optional</sup> <a name="dataDiskUriInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput"></a>

```java
public java.lang.String getDataDiskUriInput();
```

- *Type:* java.lang.String

---

##### `diskNameInput`<sup>Optional</sup> <a name="diskNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput"></a>

```java
public java.lang.String getDiskNameInput();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cachingMode`<sup>Required</sup> <a name="cachingMode" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode"></a>

```java
public java.lang.String getCachingMode();
```

- *Type:* java.lang.String

---

##### `dataDiskUri`<sup>Required</sup> <a name="dataDiskUri" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri"></a>

```java
public java.lang.String getDataDiskUri();
```

- *Type:* java.lang.String

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace">resetSecretNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecretNamespace` <a name="resetSecretNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace"></a>

```java
public void resetSecretNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput">secretNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace">secretNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `secretNamespaceInput`<sup>Optional</sup> <a name="secretNamespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput"></a>

```java
public java.lang.String getSecretNamespaceInput();
```

- *Type:* java.lang.String

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `secretNamespace`<sup>Required</sup> <a name="secretNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace"></a>

```java
public java.lang.String getSecretNamespace();
```

- *Type:* java.lang.String

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAzureFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile">resetSecretFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.putSecretRef"></a>

```java
public void putSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecretFile` <a name="resetSecretFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile"></a>

```java
public void resetSecretFile()
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef"></a>

```java
public void resetSecretRef()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput">monitorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput">secretFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.monitors">monitors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretFile">secretFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference</a>

---

##### `monitorsInput`<sup>Optional</sup> <a name="monitorsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput"></a>

```java
public java.util.List<java.lang.String> getMonitorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretFileInput`<sup>Optional</sup> <a name="secretFileInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput"></a>

```java
public java.lang.String getSecretFileInput();
```

- *Type:* java.lang.String

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef getSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.monitors"></a>

```java
public java.util.List<java.lang.String> getMonitors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretFile`<sup>Required</sup> <a name="secretFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.secretFile"></a>

```java
public java.lang.String getSecretFile();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCephFs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCephFsSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCinder getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef">putControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef">putControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef">putNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef">putNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef">resetControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef">resetControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef">resetNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef">resetNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes">resetVolumeAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControllerExpandSecretRef` <a name="putControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef"></a>

```java
public void putControllerExpandSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `putControllerPublishSecretRef` <a name="putControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef"></a>

```java
public void putControllerPublishSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `putNodePublishSecretRef` <a name="putNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef"></a>

```java
public void putNodePublishSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `putNodeStageSecretRef` <a name="putNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef"></a>

```java
public void putNodeStageSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `resetControllerExpandSecretRef` <a name="resetControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef"></a>

```java
public void resetControllerExpandSecretRef()
```

##### `resetControllerPublishSecretRef` <a name="resetControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef"></a>

```java
public void resetControllerPublishSecretRef()
```

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetNodePublishSecretRef` <a name="resetNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef"></a>

```java
public void resetNodePublishSecretRef()
```

##### `resetNodeStageSecretRef` <a name="resetNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef"></a>

```java
public void resetNodeStageSecretRef()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetVolumeAttributes` <a name="resetVolumeAttributes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes"></a>

```java
public void resetVolumeAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef">controllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef">controllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef">nodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef">nodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput">controllerExpandSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput">controllerPublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.driverInput">driverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput">nodePublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput">nodeStageSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput">volumeAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput">volumeHandleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.driver">driver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes">volumeAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle">volumeHandle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controllerExpandSecretRef`<sup>Required</sup> <a name="controllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference getControllerExpandSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a>

---

##### `controllerPublishSecretRef`<sup>Required</sup> <a name="controllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference getControllerPublishSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a>

---

##### `nodePublishSecretRef`<sup>Required</sup> <a name="nodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference getNodePublishSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a>

---

##### `nodeStageSecretRef`<sup>Required</sup> <a name="nodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference getNodeStageSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a>

---

##### `controllerExpandSecretRefInput`<sup>Optional</sup> <a name="controllerExpandSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef getControllerExpandSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `controllerPublishSecretRefInput`<sup>Optional</sup> <a name="controllerPublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef getControllerPublishSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.driverInput"></a>

```java
public java.lang.String getDriverInput();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `nodePublishSecretRefInput`<sup>Optional</sup> <a name="nodePublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef getNodePublishSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `nodeStageSecretRefInput`<sup>Optional</sup> <a name="nodeStageSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef getNodeStageSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeAttributesInput`<sup>Optional</sup> <a name="volumeAttributesInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeHandleInput`<sup>Optional</sup> <a name="volumeHandleInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput"></a>

```java
public java.lang.String getVolumeHandleInput();
```

- *Type:* java.lang.String

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeAttributes`<sup>Required</sup> <a name="volumeAttributes" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle"></a>

```java
public java.lang.String getVolumeHandle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.lunInput">lunInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput">targetWwNsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.lun">lun</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.targetWwNs">targetWwNs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.lunInput"></a>

```java
public java.lang.Number getLunInput();
```

- *Type:* java.lang.Number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetWwNsInput`<sup>Optional</sup> <a name="targetWwNsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput"></a>

```java
public java.util.List<java.lang.String> getTargetWwNsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetWwNs`<sup>Required</sup> <a name="targetWwNs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.targetWwNs"></a>

```java
public java.util.List<java.lang.String> getTargetWwNs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef"></a>

```java
public void putSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef"></a>

```java
public void resetSecretRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput">driverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver">driver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput"></a>

```java
public java.lang.String getDriverInput();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef getSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName">resetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid">resetDatasetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName"></a>

```java
public void resetDatasetName()
```

##### `resetDatasetUuid` <a name="resetDatasetUuid" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid"></a>

```java
public void resetDatasetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput">datasetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput">datasetUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid">datasetUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput"></a>

```java
public java.lang.String getDatasetNameInput();
```

- *Type:* java.lang.String

---

##### `datasetUuidInput`<sup>Optional</sup> <a name="datasetUuidInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput"></a>

```java
public java.lang.String getDatasetUuidInput();
```

- *Type:* java.lang.String

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

---

##### `datasetUuid`<sup>Required</sup> <a name="datasetUuid" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid"></a>

```java
public java.lang.String getDatasetUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlocker getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput">pdNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition">partition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName">pdName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput"></a>

```java
public java.lang.Number getPartitionInput();
```

- *Type:* java.lang.Number

---

##### `pdNameInput`<sup>Optional</sup> <a name="pdNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput"></a>

```java
public java.lang.String getPdNameInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

---

##### `pdName`<sup>Required</sup> <a name="pdName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName"></a>

```java
public java.lang.String getPdName();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput">endpointsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName">endpointsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointsNameInput`<sup>Optional</sup> <a name="endpointsNameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput"></a>

```java
public java.lang.String getEndpointsNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointsName`<sup>Required</sup> <a name="endpointsName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName"></a>

```java
public java.lang.String getEndpointsName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceHostPath getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface">resetIscsiInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetLun">resetLun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetIscsiInterface` <a name="resetIscsiInterface" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface"></a>

```java
public void resetIscsiInterface()
```

##### `resetLun` <a name="resetLun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetLun"></a>

```java
public void resetLun()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput">iqnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput">iscsiInterfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.lunInput">lunInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput">targetPortalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iqn">iqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface">iscsiInterface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.lun">lun</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal">targetPortal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `iqnInput`<sup>Optional</sup> <a name="iqnInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput"></a>

```java
public java.lang.String getIqnInput();
```

- *Type:* java.lang.String

---

##### `iscsiInterfaceInput`<sup>Optional</sup> <a name="iscsiInterfaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput"></a>

```java
public java.lang.String getIscsiInterfaceInput();
```

- *Type:* java.lang.String

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.lunInput"></a>

```java
public java.lang.Number getLunInput();
```

- *Type:* java.lang.Number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetPortalInput`<sup>Optional</sup> <a name="targetPortalInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput"></a>

```java
public java.lang.String getTargetPortalInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iqn"></a>

```java
public java.lang.String getIqn();
```

- *Type:* java.lang.String

---

##### `iscsiInterface`<sup>Required</sup> <a name="iscsiInterface" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface"></a>

```java
public java.lang.String getIscsiInterface();
```

- *Type:* java.lang.String

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetPortal`<sup>Required</sup> <a name="targetPortal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal"></a>

```java
public java.lang.String getTargetPortal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceIscsi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceLocal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceNfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore">putAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureDisk">putAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureFile">putAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCephFs">putCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCinder">putCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCsi">putCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFc">putFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlexVolume">putFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlocker">putFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGcePersistentDisk">putGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGlusterfs">putGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putHostPath">putHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putIscsi">putIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putLocal">putLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk">putPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putQuobyte">putQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putRbd">putRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putVsphereVolume">putVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore">resetAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAzureDisk">resetAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAzureFile">resetAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCephFs">resetCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCinder">resetCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCsi">resetCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFc">resetFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFlexVolume">resetFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFlocker">resetFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk">resetGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetGlusterfs">resetGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetHostPath">resetHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetIscsi">resetIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk">resetPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetQuobyte">resetQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetRbd">resetRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetVsphereVolume">resetVsphereVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsElasticBlockStore` <a name="putAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore"></a>

```java
public void putAwsElasticBlockStore(PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `putAzureDisk` <a name="putAzureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureDisk"></a>

```java
public void putAzureDisk(PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a>

---

##### `putAzureFile` <a name="putAzureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureFile"></a>

```java
public void putAzureFile(PersistentVolumeV1SpecPersistentVolumeSourceAzureFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putAzureFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a>

---

##### `putCephFs` <a name="putCephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCephFs"></a>

```java
public void putCephFs(PersistentVolumeV1SpecPersistentVolumeSourceCephFs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCephFs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a>

---

##### `putCinder` <a name="putCinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCinder"></a>

```java
public void putCinder(PersistentVolumeV1SpecPersistentVolumeSourceCinder value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCinder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a>

---

##### `putCsi` <a name="putCsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCsi"></a>

```java
public void putCsi(PersistentVolumeV1SpecPersistentVolumeSourceCsi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putCsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a>

---

##### `putFc` <a name="putFc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFc"></a>

```java
public void putFc(PersistentVolumeV1SpecPersistentVolumeSourceFc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a>

---

##### `putFlexVolume` <a name="putFlexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlexVolume"></a>

```java
public void putFlexVolume(PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a>

---

##### `putFlocker` <a name="putFlocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlocker"></a>

```java
public void putFlocker(PersistentVolumeV1SpecPersistentVolumeSourceFlocker value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putFlocker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a>

---

##### `putGcePersistentDisk` <a name="putGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGcePersistentDisk"></a>

```java
public void putGcePersistentDisk(PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGcePersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `putGlusterfs` <a name="putGlusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGlusterfs"></a>

```java
public void putGlusterfs(PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putGlusterfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a>

---

##### `putHostPath` <a name="putHostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putHostPath"></a>

```java
public void putHostPath(PersistentVolumeV1SpecPersistentVolumeSourceHostPath value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putHostPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a>

---

##### `putIscsi` <a name="putIscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putIscsi"></a>

```java
public void putIscsi(PersistentVolumeV1SpecPersistentVolumeSourceIscsi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putIscsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a>

---

##### `putLocal` <a name="putLocal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putLocal"></a>

```java
public void putLocal(PersistentVolumeV1SpecPersistentVolumeSourceLocal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a>

---

##### `putNfs` <a name="putNfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putNfs"></a>

```java
public void putNfs(PersistentVolumeV1SpecPersistentVolumeSourceNfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a>

---

##### `putPhotonPersistentDisk` <a name="putPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk"></a>

```java
public void putPhotonPersistentDisk(PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `putQuobyte` <a name="putQuobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putQuobyte"></a>

```java
public void putQuobyte(PersistentVolumeV1SpecPersistentVolumeSourceQuobyte value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a>

---

##### `putRbd` <a name="putRbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putRbd"></a>

```java
public void putRbd(PersistentVolumeV1SpecPersistentVolumeSourceRbd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putRbd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a>

---

##### `putVsphereVolume` <a name="putVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putVsphereVolume"></a>

```java
public void putVsphereVolume(PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.putVsphereVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a>

---

##### `resetAwsElasticBlockStore` <a name="resetAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore"></a>

```java
public void resetAwsElasticBlockStore()
```

##### `resetAzureDisk` <a name="resetAzureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAzureDisk"></a>

```java
public void resetAzureDisk()
```

##### `resetAzureFile` <a name="resetAzureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetAzureFile"></a>

```java
public void resetAzureFile()
```

##### `resetCephFs` <a name="resetCephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCephFs"></a>

```java
public void resetCephFs()
```

##### `resetCinder` <a name="resetCinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCinder"></a>

```java
public void resetCinder()
```

##### `resetCsi` <a name="resetCsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetCsi"></a>

```java
public void resetCsi()
```

##### `resetFc` <a name="resetFc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFc"></a>

```java
public void resetFc()
```

##### `resetFlexVolume` <a name="resetFlexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFlexVolume"></a>

```java
public void resetFlexVolume()
```

##### `resetFlocker` <a name="resetFlocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetFlocker"></a>

```java
public void resetFlocker()
```

##### `resetGcePersistentDisk` <a name="resetGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk"></a>

```java
public void resetGcePersistentDisk()
```

##### `resetGlusterfs` <a name="resetGlusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetGlusterfs"></a>

```java
public void resetGlusterfs()
```

##### `resetHostPath` <a name="resetHostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetHostPath"></a>

```java
public void resetHostPath()
```

##### `resetIscsi` <a name="resetIscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetIscsi"></a>

```java
public void resetIscsi()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetNfs` <a name="resetNfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetNfs"></a>

```java
public void resetNfs()
```

##### `resetPhotonPersistentDisk` <a name="resetPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk"></a>

```java
public void resetPhotonPersistentDisk()
```

##### `resetQuobyte` <a name="resetQuobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetQuobyte"></a>

```java
public void resetQuobyte()
```

##### `resetRbd` <a name="resetRbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetRbd"></a>

```java
public void resetRbd()
```

##### `resetVsphereVolume` <a name="resetVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.resetVsphereVolume"></a>

```java
public void resetVsphereVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore">awsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureDisk">azureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureFile">azureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cephFs">cephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flexVolume">flexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk">gcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk">photonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.vsphereVolume">vsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput">awsElasticBlockStoreInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureDiskInput">azureDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureFileInput">azureFileInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cephFsInput">cephFsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cinderInput">cinderInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.csiInput">csiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fcInput">fcInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flexVolumeInput">flexVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flockerInput">flockerInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput">gcePersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.glusterfsInput">glusterfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.hostPathInput">hostPathInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.iscsiInput">iscsiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.localInput">localInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput">photonPersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.quobyteInput">quobyteInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.rbdInput">rbdInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput">vsphereVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsElasticBlockStore`<sup>Required</sup> <a name="awsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference getAwsElasticBlockStore();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a>

---

##### `azureDisk`<sup>Required</sup> <a name="azureDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureDisk"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference getAzureDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAzureDiskOutputReference</a>

---

##### `azureFile`<sup>Required</sup> <a name="azureFile" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureFile"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference getAzureFile();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceAzureFileOutputReference</a>

---

##### `cephFs`<sup>Required</sup> <a name="cephFs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cephFs"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference getCephFs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCephFsOutputReference</a>

---

##### `cinder`<sup>Required</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cinder"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference getCinder();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCinderOutputReference</a>

---

##### `csi`<sup>Required</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.csi"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference getCsi();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceCsiOutputReference</a>

---

##### `fc`<sup>Required</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fc"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference getFc();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFcOutputReference</a>

---

##### `flexVolume`<sup>Required</sup> <a name="flexVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flexVolume"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference getFlexVolume();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolumeOutputReference</a>

---

##### `flocker`<sup>Required</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flocker"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference getFlocker();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceFlockerOutputReference</a>

---

##### `gcePersistentDisk`<sup>Required</sup> <a name="gcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference getGcePersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDiskOutputReference</a>

---

##### `glusterfs`<sup>Required</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.glusterfs"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference getGlusterfs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfsOutputReference</a>

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.hostPath"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference getHostPath();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceHostPathOutputReference</a>

---

##### `iscsi`<sup>Required</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.iscsi"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference getIscsi();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceIscsiOutputReference</a>

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.local"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference getLocal();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceLocalOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.nfs"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference getNfs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceNfsOutputReference</a>

---

##### `photonPersistentDisk`<sup>Required</sup> <a name="photonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference getPhotonPersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a>

---

##### `quobyte`<sup>Required</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.quobyte"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference getQuobyte();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference</a>

---

##### `rbd`<sup>Required</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.rbd"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference getRbd();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference</a>

---

##### `vsphereVolume`<sup>Required</sup> <a name="vsphereVolume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.vsphereVolume"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference getVsphereVolume();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference</a>

---

##### `awsElasticBlockStoreInput`<sup>Optional</sup> <a name="awsElasticBlockStoreInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore getAwsElasticBlockStoreInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeV1SpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `azureDiskInput`<sup>Optional</sup> <a name="azureDiskInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureDiskInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk getAzureDiskInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk">PersistentVolumeV1SpecPersistentVolumeSourceAzureDisk</a>

---

##### `azureFileInput`<sup>Optional</sup> <a name="azureFileInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.azureFileInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceAzureFile getAzureFileInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceAzureFile">PersistentVolumeV1SpecPersistentVolumeSourceAzureFile</a>

---

##### `cephFsInput`<sup>Optional</sup> <a name="cephFsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cephFsInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCephFs getCephFsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCephFs">PersistentVolumeV1SpecPersistentVolumeSourceCephFs</a>

---

##### `cinderInput`<sup>Optional</sup> <a name="cinderInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.cinderInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCinder getCinderInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCinder">PersistentVolumeV1SpecPersistentVolumeSourceCinder</a>

---

##### `csiInput`<sup>Optional</sup> <a name="csiInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.csiInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceCsi getCsiInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceCsi">PersistentVolumeV1SpecPersistentVolumeSourceCsi</a>

---

##### `fcInput`<sup>Optional</sup> <a name="fcInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.fcInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFc getFcInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFc">PersistentVolumeV1SpecPersistentVolumeSourceFc</a>

---

##### `flexVolumeInput`<sup>Optional</sup> <a name="flexVolumeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flexVolumeInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume getFlexVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume">PersistentVolumeV1SpecPersistentVolumeSourceFlexVolume</a>

---

##### `flockerInput`<sup>Optional</sup> <a name="flockerInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.flockerInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceFlocker getFlockerInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceFlocker">PersistentVolumeV1SpecPersistentVolumeSourceFlocker</a>

---

##### `gcePersistentDiskInput`<sup>Optional</sup> <a name="gcePersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk getGcePersistentDiskInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `glusterfsInput`<sup>Optional</sup> <a name="glusterfsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.glusterfsInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs getGlusterfsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs">PersistentVolumeV1SpecPersistentVolumeSourceGlusterfs</a>

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.hostPathInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceHostPath getHostPathInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceHostPath">PersistentVolumeV1SpecPersistentVolumeSourceHostPath</a>

---

##### `iscsiInput`<sup>Optional</sup> <a name="iscsiInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.iscsiInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceIscsi getIscsiInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceIscsi">PersistentVolumeV1SpecPersistentVolumeSourceIscsi</a>

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.localInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceLocal getLocalInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceLocal">PersistentVolumeV1SpecPersistentVolumeSourceLocal</a>

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.nfsInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceNfs getNfsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceNfs">PersistentVolumeV1SpecPersistentVolumeSourceNfs</a>

---

##### `photonPersistentDiskInput`<sup>Optional</sup> <a name="photonPersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk getPhotonPersistentDiskInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `quobyteInput`<sup>Optional</sup> <a name="quobyteInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.quobyteInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceQuobyte getQuobyteInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a>

---

##### `rbdInput`<sup>Optional</sup> <a name="rbdInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.rbdInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceRbd getRbdInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a>

---

##### `vsphereVolumeInput`<sup>Optional</sup> <a name="vsphereVolumeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume getVsphereVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSource">PersistentVolumeV1SpecPersistentVolumeSource</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType"></a>

```java
public void resetFsType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput">pdIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId">pdId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `pdIdInput`<sup>Optional</sup> <a name="pdIdInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput"></a>

```java
public java.lang.String getPdIdInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `pdId`<sup>Required</sup> <a name="pdId" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId"></a>

```java
public java.lang.String getPdId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeV1SpecPersistentVolumeSourcePhotonPersistentDisk</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput">registryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput">volumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.registry">registry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.volume">volume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput"></a>

```java
public java.lang.String getRegistryInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput"></a>

```java
public java.lang.String getVolumeInput();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceQuobyte getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceQuobyte">PersistentVolumeV1SpecPersistentVolumeSourceQuobyte</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetKeyring">resetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetRadosUser">resetRadosUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetRbdPool">resetRbdPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.putSecretRef"></a>

```java
public void putSecretRef(PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetKeyring` <a name="resetKeyring" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetKeyring"></a>

```java
public void resetKeyring()
```

##### `resetRadosUser` <a name="resetRadosUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetRadosUser"></a>

```java
public void resetRadosUser()
```

##### `resetRbdPool` <a name="resetRbdPool" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetRbdPool"></a>

```java
public void resetRbdPool()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.resetSecretRef"></a>

```java
public void resetSecretRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput">cephMonitorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.keyringInput">keyringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput">radosUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput">rbdImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput">rbdPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors">cephMonitors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.keyring">keyring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.radosUser">radosUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdImage">rbdImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdPool">rbdPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.secretRef"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference</a>

---

##### `cephMonitorsInput`<sup>Optional</sup> <a name="cephMonitorsInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput"></a>

```java
public java.util.List<java.lang.String> getCephMonitorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `keyringInput`<sup>Optional</sup> <a name="keyringInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.keyringInput"></a>

```java
public java.lang.String getKeyringInput();
```

- *Type:* java.lang.String

---

##### `radosUserInput`<sup>Optional</sup> <a name="radosUserInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput"></a>

```java
public java.lang.String getRadosUserInput();
```

- *Type:* java.lang.String

---

##### `rbdImageInput`<sup>Optional</sup> <a name="rbdImageInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput"></a>

```java
public java.lang.String getRbdImageInput();
```

- *Type:* java.lang.String

---

##### `rbdPoolInput`<sup>Optional</sup> <a name="rbdPoolInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput"></a>

```java
public java.lang.String getRbdPoolInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef getSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `cephMonitors`<sup>Required</sup> <a name="cephMonitors" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors"></a>

```java
public java.util.List<java.lang.String> getCephMonitors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

---

##### `radosUser`<sup>Required</sup> <a name="radosUser" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.radosUser"></a>

```java
public java.lang.String getRadosUser();
```

- *Type:* java.lang.String

---

##### `rbdImage`<sup>Required</sup> <a name="rbdImage" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdImage"></a>

```java
public java.lang.String getRbdImage();
```

- *Type:* java.lang.String

---

##### `rbdPool`<sup>Required</sup> <a name="rbdPool" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.rbdPool"></a>

```java
public java.lang.String getRbdPool();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceRbd getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbd">PersistentVolumeV1SpecPersistentVolumeSourceRbd</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeV1SpecPersistentVolumeSourceRbdSecretRef</a>

---


### PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference <a name="PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference;

new PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType">resetFsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType"></a>

```java
public void resetFsType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput">volumePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath">volumePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `volumePathInput`<sup>Optional</sup> <a name="volumePathInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput"></a>

```java
public java.lang.String getVolumePathInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath"></a>

```java
public java.lang.String getVolumePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue"></a>

```java
public PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume">PersistentVolumeV1SpecPersistentVolumeSourceVsphereVolume</a>

---


### PersistentVolumeV1TimeoutsOutputReference <a name="PersistentVolumeV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume_v1.PersistentVolumeV1TimeoutsOutputReference;

new PersistentVolumeV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolumeV1.PersistentVolumeV1Timeouts">PersistentVolumeV1Timeouts</a> OR com.hashicorp.cdktf.IResolvable

---



