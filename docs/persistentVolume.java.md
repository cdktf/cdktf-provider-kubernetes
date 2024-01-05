# `persistentVolume` Submodule <a name="`persistentVolume` Submodule" id="@cdktf/provider-kubernetes.persistentVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PersistentVolume <a name="PersistentVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume kubernetes_persistent_volume}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolume;

PersistentVolume.Builder.create(Construct scope, java.lang.String id)
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
    .metadata(PersistentVolumeMetadata)
    .spec(IResolvable)
    .spec(java.util.List<PersistentVolumeSpec>)
//  .id(java.lang.String)
//  .timeouts(PersistentVolumeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.spec">spec</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#id PersistentVolume#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#metadata PersistentVolume#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.spec"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#spec PersistentVolume#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#id PersistentVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#timeouts PersistentVolume#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata"></a>

```java
public void putMetadata(PersistentVolumeMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec"></a>

```java
public void putSpec(IResolvable OR java.util.List<PersistentVolumeSpec> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putSpec.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts"></a>

```java
public void putTimeouts(PersistentVolumeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PersistentVolume resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolume;

PersistentVolume.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolume;

PersistentVolume.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolume;

PersistentVolume.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolume;

PersistentVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PersistentVolume.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PersistentVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PersistentVolume to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PersistentVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PersistentVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference">PersistentVolumeMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList">PersistentVolumeSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference">PersistentVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.specInput">specInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadata"></a>

```java
public PersistentVolumeMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference">PersistentVolumeMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.spec"></a>

```java
public PersistentVolumeSpecList getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList">PersistentVolumeSpecList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeouts"></a>

```java
public PersistentVolumeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference">PersistentVolumeTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.metadataInput"></a>

```java
public PersistentVolumeMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.specInput"></a>

```java
public java.lang.Object getSpecInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolume.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PersistentVolumeConfig <a name="PersistentVolumeConfig" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeConfig;

PersistentVolumeConfig.builder()
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
    .metadata(PersistentVolumeMetadata)
    .spec(IResolvable)
    .spec(java.util.List<PersistentVolumeSpec>)
//  .id(java.lang.String)
//  .timeouts(PersistentVolumeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.spec">spec</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#id PersistentVolume#id}. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.metadata"></a>

```java
public PersistentVolumeMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#metadata PersistentVolume#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.spec"></a>

```java
public java.lang.Object getSpec();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#spec PersistentVolume#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#id PersistentVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeConfig.property.timeouts"></a>

```java
public PersistentVolumeTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#timeouts PersistentVolume#timeouts}

---

### PersistentVolumeMetadata <a name="PersistentVolumeMetadata" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeMetadata;

PersistentVolumeMetadata.builder()
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the persistent volume, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the persistent volume that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#annotations PersistentVolume#annotations}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the persistent volume.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#labels PersistentVolume#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the persistent volume, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

### PersistentVolumeSpec <a name="PersistentVolumeSpec" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpec;

PersistentVolumeSpec.builder()
    .accessModes(java.util.List<java.lang.String>)
    .capacity(java.util.Map<java.lang.String, java.lang.String>)
    .persistentVolumeSource(PersistentVolumeSpecPersistentVolumeSource)
//  .claimRef(PersistentVolumeSpecClaimRef)
//  .mountOptions(java.util.List<java.lang.String>)
//  .nodeAffinity(PersistentVolumeSpecNodeAffinity)
//  .persistentVolumeReclaimPolicy(java.lang.String)
//  .storageClassName(java.lang.String)
//  .volumeMode(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.accessModes">accessModes</a></code> | <code>java.util.List<java.lang.String></code> | Contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.capacity">capacity</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeSource">persistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | persistent_volume_source block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.claimRef">claimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | claim_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.nodeAffinity">nodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | node_affinity block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeReclaimPolicy">persistentVolumeReclaimPolicy</a></code> | <code>java.lang.String</code> | What happens to a persistent volume when released from its claim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.volumeMode">volumeMode</a></code> | <code>java.lang.String</code> | Defines if a volume is intended to be used with a formatted filesystem. |

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.accessModes"></a>

```java
public java.util.List<java.lang.String> getAccessModes();
```

- *Type:* java.util.List<java.lang.String>

Contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#access_modes PersistentVolume#access_modes}

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.capacity"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacity();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

A description of the persistent volume's resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#capacity PersistentVolume#capacity}

---

##### `persistentVolumeSource`<sup>Required</sup> <a name="persistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeSource"></a>

```java
public PersistentVolumeSpecPersistentVolumeSource getPersistentVolumeSource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

persistent_volume_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#persistent_volume_source PersistentVolume#persistent_volume_source}

---

##### `claimRef`<sup>Optional</sup> <a name="claimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.claimRef"></a>

```java
public PersistentVolumeSpecClaimRef getClaimRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

claim_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#claim_ref PersistentVolume#claim_ref}

---

##### `mountOptions`<sup>Optional</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

A list of mount options, e.g. ["ro", "soft"]. Not validated - mount will simply fail if one is invalid.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#mount_options PersistentVolume#mount_options}

---

##### `nodeAffinity`<sup>Optional</sup> <a name="nodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.nodeAffinity"></a>

```java
public PersistentVolumeSpecNodeAffinity getNodeAffinity();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

node_affinity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#node_affinity PersistentVolume#node_affinity}

---

##### `persistentVolumeReclaimPolicy`<sup>Optional</sup> <a name="persistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.persistentVolumeReclaimPolicy"></a>

```java
public java.lang.String getPersistentVolumeReclaimPolicy();
```

- *Type:* java.lang.String

What happens to a persistent volume when released from its claim.

Valid options are Retain (default) and Recycle. Recycling must be supported by the volume plugin underlying this persistent volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#persistent_volume_reclaim_policy PersistentVolume#persistent_volume_reclaim_policy}

---

##### `storageClassName`<sup>Optional</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

A description of the persistent volume's class. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#class.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#storage_class_name PersistentVolume#storage_class_name}

---

##### `volumeMode`<sup>Optional</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec.property.volumeMode"></a>

```java
public java.lang.String getVolumeMode();
```

- *Type:* java.lang.String

Defines if a volume is intended to be used with a formatted filesystem.

or to remain in raw block state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_mode PersistentVolume#volume_mode}

---

### PersistentVolumeSpecClaimRef <a name="PersistentVolumeSpecClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecClaimRef;

PersistentVolumeSpecClaimRef.builder()
    .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.name">name</a></code> | <code>java.lang.String</code> | The name of the PersistentVolumeClaim. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the PersistentVolumeClaim.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

The namespace of the PersistentVolumeClaim. Uses 'default' namespace if none is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecNodeAffinity <a name="PersistentVolumeSpecNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinity;

PersistentVolumeSpecNodeAffinity.builder()
//  .required(PersistentVolumeSpecNodeAffinityRequired)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | required block. |

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity.property.required"></a>

```java
public PersistentVolumeSpecNodeAffinityRequired getRequired();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

required block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#required PersistentVolume#required}

---

### PersistentVolumeSpecNodeAffinityRequired <a name="PersistentVolumeSpecNodeAffinityRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequired;

PersistentVolumeSpecNodeAffinityRequired.builder()
    .nodeSelectorTerm(IResolvable)
    .nodeSelectorTerm(java.util.List<PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.property.nodeSelectorTerm">nodeSelectorTerm</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>></code> | node_selector_term block. |

---

##### `nodeSelectorTerm`<sup>Required</sup> <a name="nodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired.property.nodeSelectorTerm"></a>

```java
public java.lang.Object getNodeSelectorTerm();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>>

node_selector_term block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#node_selector_term PersistentVolume#node_selector_term}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm;

PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.builder()
//  .matchExpressions(IResolvable)
//  .matchExpressions(java.util.List<PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions>)
//  .matchFields(IResolvable)
//  .matchFields(java.util.List<PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions">matchExpressions</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>></code> | match_expressions block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields">matchFields</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>></code> | match_fields block. |

---

##### `matchExpressions`<sup>Optional</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchExpressions"></a>

```java
public java.lang.Object getMatchExpressions();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>>

match_expressions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#match_expressions PersistentVolume#match_expressions}

---

##### `matchFields`<sup>Optional</sup> <a name="matchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm.property.matchFields"></a>

```java
public java.lang.Object getMatchFields();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>>

match_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#match_fields PersistentVolume#match_fields}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions;

PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.builder()
    .key(java.lang.String)
    .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#key PersistentVolume#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#operator PersistentVolume#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#values PersistentVolume#values}

---

### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields;

PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.builder()
    .key(java.lang.String)
    .operator(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key">key</a></code> | <code>java.lang.String</code> | The label key that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator">operator</a></code> | <code>java.lang.String</code> | A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | An array of string values. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The label key that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#key PersistentVolume#key}

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

A key's relationship to a set of values. Valid operators ard `In`, `NotIn`, `Exists`, `DoesNotExist`, `Gt`, and `Lt`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#operator PersistentVolume#operator}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

An array of string values.

If the operator is `In` or `NotIn`, the values array must be non-empty. If the operator is `Exists` or `DoesNotExist`, the values array must be empty. This array is replaced during a strategic merge patch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#values PersistentVolume#values}

---

### PersistentVolumeSpecPersistentVolumeSource <a name="PersistentVolumeSpecPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSource;

PersistentVolumeSpecPersistentVolumeSource.builder()
//  .awsElasticBlockStore(PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore)
//  .azureDisk(PersistentVolumeSpecPersistentVolumeSourceAzureDisk)
//  .azureFile(PersistentVolumeSpecPersistentVolumeSourceAzureFile)
//  .cephFs(PersistentVolumeSpecPersistentVolumeSourceCephFs)
//  .cinder(PersistentVolumeSpecPersistentVolumeSourceCinder)
//  .csi(PersistentVolumeSpecPersistentVolumeSourceCsi)
//  .fc(PersistentVolumeSpecPersistentVolumeSourceFc)
//  .flexVolume(PersistentVolumeSpecPersistentVolumeSourceFlexVolume)
//  .flocker(PersistentVolumeSpecPersistentVolumeSourceFlocker)
//  .gcePersistentDisk(PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk)
//  .glusterfs(PersistentVolumeSpecPersistentVolumeSourceGlusterfs)
//  .hostPath(PersistentVolumeSpecPersistentVolumeSourceHostPath)
//  .iscsi(PersistentVolumeSpecPersistentVolumeSourceIscsi)
//  .local(PersistentVolumeSpecPersistentVolumeSourceLocal)
//  .nfs(PersistentVolumeSpecPersistentVolumeSourceNfs)
//  .photonPersistentDisk(PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk)
//  .quobyte(PersistentVolumeSpecPersistentVolumeSourceQuobyte)
//  .rbd(PersistentVolumeSpecPersistentVolumeSourceRbd)
//  .vsphereVolume(PersistentVolumeSpecPersistentVolumeSourceVsphereVolume)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.awsElasticBlockStore">awsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | aws_elastic_block_store block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureDisk">azureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | azure_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureFile">azureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | azure_file block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cephFs">cephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | ceph_fs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | cinder block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | csi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | fc block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flexVolume">flexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | flex_volume block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | flocker block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.gcePersistentDisk">gcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | gce_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | glusterfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | host_path block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | iscsi block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | local block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | nfs block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.photonPersistentDisk">photonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | photon_persistent_disk block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | quobyte block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | rbd block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.vsphereVolume">vsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | vsphere_volume block. |

---

##### `awsElasticBlockStore`<sup>Optional</sup> <a name="awsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.awsElasticBlockStore"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore getAwsElasticBlockStore();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

aws_elastic_block_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#aws_elastic_block_store PersistentVolume#aws_elastic_block_store}

---

##### `azureDisk`<sup>Optional</sup> <a name="azureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureDisk"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAzureDisk getAzureDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

azure_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#azure_disk PersistentVolume#azure_disk}

---

##### `azureFile`<sup>Optional</sup> <a name="azureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.azureFile"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAzureFile getAzureFile();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

azure_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#azure_file PersistentVolume#azure_file}

---

##### `cephFs`<sup>Optional</sup> <a name="cephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cephFs"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCephFs getCephFs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

ceph_fs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#ceph_fs PersistentVolume#ceph_fs}

---

##### `cinder`<sup>Optional</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.cinder"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCinder getCinder();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

cinder block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#cinder PersistentVolume#cinder}

---

##### `csi`<sup>Optional</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.csi"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsi getCsi();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

csi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#csi PersistentVolume#csi}

---

##### `fc`<sup>Optional</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.fc"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFc getFc();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

fc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fc PersistentVolume#fc}

---

##### `flexVolume`<sup>Optional</sup> <a name="flexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flexVolume"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlexVolume getFlexVolume();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

flex_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#flex_volume PersistentVolume#flex_volume}

---

##### `flocker`<sup>Optional</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.flocker"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlocker getFlocker();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

flocker block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#flocker PersistentVolume#flocker}

---

##### `gcePersistentDisk`<sup>Optional</sup> <a name="gcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.gcePersistentDisk"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk getGcePersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

gce_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#gce_persistent_disk PersistentVolume#gce_persistent_disk}

---

##### `glusterfs`<sup>Optional</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.glusterfs"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceGlusterfs getGlusterfs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

glusterfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#glusterfs PersistentVolume#glusterfs}

---

##### `hostPath`<sup>Optional</sup> <a name="hostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.hostPath"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceHostPath getHostPath();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

host_path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#host_path PersistentVolume#host_path}

---

##### `iscsi`<sup>Optional</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.iscsi"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceIscsi getIscsi();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

iscsi block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#iscsi PersistentVolume#iscsi}

---

##### `local`<sup>Optional</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.local"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceLocal getLocal();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

local block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#local PersistentVolume#local}

---

##### `nfs`<sup>Optional</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.nfs"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceNfs getNfs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

nfs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#nfs PersistentVolume#nfs}

---

##### `photonPersistentDisk`<sup>Optional</sup> <a name="photonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.photonPersistentDisk"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk getPhotonPersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

photon_persistent_disk block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#photon_persistent_disk PersistentVolume#photon_persistent_disk}

---

##### `quobyte`<sup>Optional</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.quobyte"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceQuobyte getQuobyte();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

quobyte block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#quobyte PersistentVolume#quobyte}

---

##### `rbd`<sup>Optional</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.rbd"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceRbd getRbd();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

rbd block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#rbd PersistentVolume#rbd}

---

##### `vsphereVolume`<sup>Optional</sup> <a name="vsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource.property.vsphereVolume"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceVsphereVolume getVsphereVolume();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

vsphere_volume block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#vsphere_volume PersistentVolume#vsphere_volume}

---

### PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore <a name="PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore;

PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.partition">partition</a></code> | <code>java.lang.Number</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_id PersistentVolume#volume_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#partition PersistentVolume#partition}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceAzureDisk <a name="PersistentVolumeSpecPersistentVolumeSourceAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk;

PersistentVolumeSpecPersistentVolumeSourceAzureDisk.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.cachingMode">cachingMode</a></code> | <code>java.lang.String</code> | Host Caching mode: None, Read Only, Read Write. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.dataDiskUri">dataDiskUri</a></code> | <code>java.lang.String</code> | The URI the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.diskName">diskName</a></code> | <code>java.lang.String</code> | The Name of the data disk in the blob storage. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.kind">kind</a></code> | <code>java.lang.String</code> | The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `cachingMode`<sup>Required</sup> <a name="cachingMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.cachingMode"></a>

```java
public java.lang.String getCachingMode();
```

- *Type:* java.lang.String

Host Caching mode: None, Read Only, Read Write.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#caching_mode PersistentVolume#caching_mode}

---

##### `dataDiskUri`<sup>Required</sup> <a name="dataDiskUri" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.dataDiskUri"></a>

```java
public java.lang.String getDataDiskUri();
```

- *Type:* java.lang.String

The URI the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#data_disk_uri PersistentVolume#data_disk_uri}

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

The Name of the data disk in the blob storage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#disk_name PersistentVolume#disk_name}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

The type for the data disk. Expected values: Shared, Dedicated, Managed. Defaults to Shared.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#kind PersistentVolume#kind}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceAzureFile <a name="PersistentVolumeSpecPersistentVolumeSourceAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceAzureFile;

PersistentVolumeSpecPersistentVolumeSourceAzureFile.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretName">secretName</a></code> | <code>java.lang.String</code> | The name of secret that contains Azure Storage Account Name and Key. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.shareName">shareName</a></code> | <code>java.lang.String</code> | Share Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretNamespace">secretNamespace</a></code> | <code>java.lang.String</code> | The namespace of the secret that contains Azure Storage Account Name and Key. |

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

The name of secret that contains Azure Storage Account Name and Key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_name PersistentVolume#secret_name}

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

Share Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#share_name PersistentVolume#share_name}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secretNamespace`<sup>Optional</sup> <a name="secretNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile.property.secretNamespace"></a>

```java
public java.lang.String getSecretNamespace();
```

- *Type:* java.lang.String

The namespace of the secret that contains Azure Storage Account Name and Key.

For Kubernetes up to 1.18.x the default is the same as the Pod. For Kubernetes 1.19.x and later the default is "default" namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_namespace PersistentVolume#secret_namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCephFs <a name="PersistentVolumeSpecPersistentVolumeSourceCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCephFs;

PersistentVolumeSpecPersistentVolumeSourceCephFs.builder()
    .monitors(java.util.List<java.lang.String>)
//  .path(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secretFile(java.lang.String)
//  .secretRef(PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef)
//  .user(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.monitors">monitors</a></code> | <code>java.util.List<java.lang.String></code> | Monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.path">path</a></code> | <code>java.lang.String</code> | Used as the mounted root, rather than the full Ceph tree, default is /. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretFile">secretFile</a></code> | <code>java.lang.String</code> | The path to key ring for User, default is `/etc/ceph/user.secret`. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.user">user</a></code> | <code>java.lang.String</code> | User is the rados user name, default is admin. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it. |

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.monitors"></a>

```java
public java.util.List<java.lang.String> getMonitors();
```

- *Type:* java.util.List<java.lang.String>

Monitors is a collection of Ceph monitors. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#monitors PersistentVolume#monitors}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Used as the mounted root, rather than the full Ceph tree, default is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to `false` (read/write). More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secretFile`<sup>Optional</sup> <a name="secretFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretFile"></a>

```java
public java.lang.String getSecretFile();
```

- *Type:* java.lang.String

The path to key ring for User, default is `/etc/ceph/user.secret`. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_file PersistentVolume#secret_file}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.secretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

User is the rados user name, default is admin. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#user PersistentVolume#user}

---

### PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef;

PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCinder <a name="PersistentVolumeSpecPersistentVolumeSourceCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCinder;

PersistentVolumeSpecPersistentVolumeSourceCinder.builder()
    .volumeId(java.lang.String)
//  .fsType(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Volume ID used to identify the volume in Cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: https://examples.k8s.io/mysql-cinder-pd/README.md. |

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Volume ID used to identify the volume in Cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_id PersistentVolume#volume_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). More info: https://examples.k8s.io/mysql-cinder-pd/README.md.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceCsi <a name="PersistentVolumeSpecPersistentVolumeSourceCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsi;

PersistentVolumeSpecPersistentVolumeSourceCsi.builder()
    .driver(java.lang.String)
    .volumeHandle(java.lang.String)
//  .controllerExpandSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef)
//  .controllerPublishSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef)
//  .fsType(java.lang.String)
//  .nodePublishSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef)
//  .nodeStageSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .volumeAttributes(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.driver">driver</a></code> | <code>java.lang.String</code> | the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeHandle">volumeHandle</a></code> | <code>java.lang.String</code> | A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef">controllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | controller_expand_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef">controllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | controller_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodePublishSecretRef">nodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | node_publish_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodeStageSecretRef">nodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | node_stage_secret_ref block. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#csi. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeAttributes">volumeAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Attributes of the volume to publish. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

the name of the volume driver to use. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#driver PersistentVolume#driver}

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeHandle"></a>

```java
public java.lang.String getVolumeHandle();
```

- *Type:* java.lang.String

A string value that uniquely identifies the volume. More info: https://kubernetes.io/docs/concepts/storage/volumes/#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_handle PersistentVolume#volume_handle}

---

##### `controllerExpandSecretRef`<sup>Optional</sup> <a name="controllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerExpandSecretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef getControllerExpandSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

controller_expand_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#controller_expand_secret_ref PersistentVolume#controller_expand_secret_ref}

---

##### `controllerPublishSecretRef`<sup>Optional</sup> <a name="controllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.controllerPublishSecretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef getControllerPublishSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

controller_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#controller_publish_secret_ref PersistentVolume#controller_publish_secret_ref}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `nodePublishSecretRef`<sup>Optional</sup> <a name="nodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodePublishSecretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef getNodePublishSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

node_publish_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#node_publish_secret_ref PersistentVolume#node_publish_secret_ref}

---

##### `nodeStageSecretRef`<sup>Optional</sup> <a name="nodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.nodeStageSecretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef getNodeStageSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

node_stage_secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#node_stage_secret_ref PersistentVolume#node_stage_secret_ref}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to set the read-only property in VolumeMounts to "true". If omitted, the default is "false". More info: https://kubernetes.io/docs/concepts/storage/volumes#csi.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `volumeAttributes`<sup>Optional</sup> <a name="volumeAttributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi.property.volumeAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Attributes of the volume to publish.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_attributes PersistentVolume#volume_attributes}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef;

PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef;

PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef;

PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef;

PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceFc <a name="PersistentVolumeSpecPersistentVolumeSourceFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceFc;

PersistentVolumeSpecPersistentVolumeSourceFc.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.lun">lun</a></code> | <code>java.lang.Number</code> | FC target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.targetWwNs">targetWwNs</a></code> | <code>java.util.List<java.lang.String></code> | FC target worldwide names (WWNs). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write). |

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

FC target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#lun PersistentVolume#lun}

---

##### `targetWwNs`<sup>Required</sup> <a name="targetWwNs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.targetWwNs"></a>

```java
public java.util.List<java.lang.String> getTargetWwNs();
```

- *Type:* java.util.List<java.lang.String>

FC target worldwide names (WWNs).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#target_ww_ns PersistentVolume#target_ww_ns}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceFlexVolume <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume;

PersistentVolumeSpecPersistentVolumeSourceFlexVolume.builder()
    .driver(java.lang.String)
//  .fsType(java.lang.String)
//  .options(java.util.Map<java.lang.String, java.lang.String>)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secretRef(PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.driver">driver</a></code> | <code>java.lang.String</code> | Driver is the name of the driver to use for this volume. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Extra command options if any. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | secret_ref block. |

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

Driver is the name of the driver to use for this volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#driver PersistentVolume#driver}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". The default filesystem depends on FlexVolume script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Extra command options if any.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#options PersistentVolume#options}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false (read/write).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume.property.secretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef;

PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceFlocker <a name="PersistentVolumeSpecPersistentVolumeSourceFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceFlocker;

PersistentVolumeSpecPersistentVolumeSourceFlocker.builder()
//  .datasetName(java.lang.String)
//  .datasetUuid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetUuid">datasetUuid</a></code> | <code>java.lang.String</code> | UUID of the dataset. This is unique identifier of a Flocker dataset. |

---

##### `datasetName`<sup>Optional</sup> <a name="datasetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#dataset_name PersistentVolume#dataset_name}

---

##### `datasetUuid`<sup>Optional</sup> <a name="datasetUuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker.property.datasetUuid"></a>

```java
public java.lang.String getDatasetUuid();
```

- *Type:* java.lang.String

UUID of the dataset. This is unique identifier of a Flocker dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#dataset_uuid PersistentVolume#dataset_uuid}

---

### PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk <a name="PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk;

PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.pdName">pdName</a></code> | <code>java.lang.String</code> | Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.partition">partition</a></code> | <code>java.lang.Number</code> | The partition in the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk. |

---

##### `pdName`<sup>Required</sup> <a name="pdName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.pdName"></a>

```java
public java.lang.String getPdName();
```

- *Type:* java.lang.String

Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#pd_name PersistentVolume#pd_name}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `partition`<sup>Optional</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

The partition in the volume that you want to mount.

If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as "1". Similarly, the volume partition for /dev/sda is "0" (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#partition PersistentVolume#partition}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceGlusterfs <a name="PersistentVolumeSpecPersistentVolumeSourceGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs;

PersistentVolumeSpecPersistentVolumeSourceGlusterfs.builder()
    .endpointsName(java.lang.String)
    .path(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.endpointsName">endpointsName</a></code> | <code>java.lang.String</code> | The endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.path">path</a></code> | <code>java.lang.String</code> | The Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod. |

---

##### `endpointsName`<sup>Required</sup> <a name="endpointsName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.endpointsName"></a>

```java
public java.lang.String getEndpointsName();
```

- *Type:* java.lang.String

The endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#endpoints_name PersistentVolume#endpoints_name}

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

The Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceHostPath <a name="PersistentVolumeSpecPersistentVolumeSourceHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceHostPath;

PersistentVolumeSpecPersistentVolumeSourceHostPath.builder()
//  .path(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.path">path</a></code> | <code>java.lang.String</code> | Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.type">type</a></code> | <code>java.lang.String</code> | Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Type for HostPath volume. Allowed values are "" (default), DirectoryOrCreate, Directory, FileOrCreate, File, Socket, CharDevice and BlockDevice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#type PersistentVolume#type}

---

### PersistentVolumeSpecPersistentVolumeSourceIscsi <a name="PersistentVolumeSpecPersistentVolumeSourceIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceIscsi;

PersistentVolumeSpecPersistentVolumeSourceIscsi.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iqn">iqn</a></code> | <code>java.lang.String</code> | Target iSCSI Qualified Name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.targetPortal">targetPortal</a></code> | <code>java.lang.String</code> | iSCSI target portal. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iscsiInterface">iscsiInterface</a></code> | <code>java.lang.String</code> | iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp). |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.lun">lun</a></code> | <code>java.lang.Number</code> | iSCSI target lun number. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. |

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iqn"></a>

```java
public java.lang.String getIqn();
```

- *Type:* java.lang.String

Target iSCSI Qualified Name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#iqn PersistentVolume#iqn}

---

##### `targetPortal`<sup>Required</sup> <a name="targetPortal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.targetPortal"></a>

```java
public java.lang.String getTargetPortal();
```

- *Type:* java.lang.String

iSCSI target portal.

The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#target_portal PersistentVolume#target_portal}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `iscsiInterface`<sup>Optional</sup> <a name="iscsiInterface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.iscsiInterface"></a>

```java
public java.lang.String getIscsiInterface();
```

- *Type:* java.lang.String

iSCSI interface name that uses an iSCSI transport. Defaults to 'default' (tcp).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#iscsi_interface PersistentVolume#iscsi_interface}

---

##### `lun`<sup>Optional</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

iSCSI target lun number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#lun PersistentVolume#lun}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourceLocal <a name="PersistentVolumeSpecPersistentVolumeSourceLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceLocal;

PersistentVolumeSpecPersistentVolumeSourceLocal.builder()
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.property.path">path</a></code> | <code>java.lang.String</code> | Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#local. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the directory on the host. More info: https://kubernetes.io/docs/concepts/storage/volumes#local.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

### PersistentVolumeSpecPersistentVolumeSourceNfs <a name="PersistentVolumeSpecPersistentVolumeSourceNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceNfs;

PersistentVolumeSpecPersistentVolumeSourceNfs.builder()
    .path(java.lang.String)
    .server(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.path">path</a></code> | <code>java.lang.String</code> | Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.server">server</a></code> | <code>java.lang.String</code> | Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#path PersistentVolume#path}

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#server PersistentVolume#server}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

### PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk <a name="PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk;

PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.builder()
    .pdId(java.lang.String)
//  .fsType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId">pdId</a></code> | <code>java.lang.String</code> | ID that identifies Photon Controller persistent disk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |

---

##### `pdId`<sup>Required</sup> <a name="pdId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.pdId"></a>

```java
public java.lang.String getPdId();
```

- *Type:* java.lang.String

ID that identifies Photon Controller persistent disk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#pd_id PersistentVolume#pd_id}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

### PersistentVolumeSpecPersistentVolumeSourceQuobyte <a name="PersistentVolumeSpecPersistentVolumeSourceQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceQuobyte;

PersistentVolumeSpecPersistentVolumeSourceQuobyte.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.registry">registry</a></code> | <code>java.lang.String</code> | Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.volume">volume</a></code> | <code>java.lang.String</code> | Volume is a string that references an already created Quobyte volume by name. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.group">group</a></code> | <code>java.lang.String</code> | Group to map volume access to Default is no group. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.user">user</a></code> | <code>java.lang.String</code> | User to map volume access to Defaults to serivceaccount user. |

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#registry PersistentVolume#registry}

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

Volume is a string that references an already created Quobyte volume by name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume PersistentVolume#volume}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

Group to map volume access to Default is no group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#group PersistentVolume#group}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the Quobyte volume to be mounted with read-only permissions. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

User to map volume access to Defaults to serivceaccount user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#user PersistentVolume#user}

---

### PersistentVolumeSpecPersistentVolumeSourceRbd <a name="PersistentVolumeSpecPersistentVolumeSourceRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceRbd;

PersistentVolumeSpecPersistentVolumeSourceRbd.builder()
    .cephMonitors(java.util.List<java.lang.String>)
    .rbdImage(java.lang.String)
//  .fsType(java.lang.String)
//  .keyring(java.lang.String)
//  .radosUser(java.lang.String)
//  .rbdPool(java.lang.String)
//  .readOnly(java.lang.Boolean)
//  .readOnly(IResolvable)
//  .secretRef(PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.cephMonitors">cephMonitors</a></code> | <code>java.util.List<java.lang.String></code> | A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdImage">rbdImage</a></code> | <code>java.lang.String</code> | The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type of the volume that you want to mount. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.keyring">keyring</a></code> | <code>java.lang.String</code> | Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.radosUser">radosUser</a></code> | <code>java.lang.String</code> | The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdPool">rbdPool</a></code> | <code>java.lang.String</code> | The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | secret_ref block. |

---

##### `cephMonitors`<sup>Required</sup> <a name="cephMonitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.cephMonitors"></a>

```java
public java.util.List<java.lang.String> getCephMonitors();
```

- *Type:* java.util.List<java.lang.String>

A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#ceph_monitors PersistentVolume#ceph_monitors}

---

##### `rbdImage`<sup>Required</sup> <a name="rbdImage" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdImage"></a>

```java
public java.lang.String getRbdImage();
```

- *Type:* java.lang.String

The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#rbd_image PersistentVolume#rbd_image}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type of the volume that you want to mount.

Tip: Ensure that the filesystem type is supported by the host operating system. Examples: "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

##### `keyring`<sup>Optional</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#keyring PersistentVolume#keyring}

---

##### `radosUser`<sup>Optional</sup> <a name="radosUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.radosUser"></a>

```java
public java.lang.String getRadosUser();
```

- *Type:* java.lang.String

The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#rados_user PersistentVolume#rados_user}

---

##### `rbdPool`<sup>Optional</sup> <a name="rbdPool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.rbdPool"></a>

```java
public java.lang.String getRbdPool();
```

- *Type:* java.lang.String

The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#rbd_pool PersistentVolume#rbd_pool}

---

##### `readOnly`<sup>Optional</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether to force the read-only setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#read_only PersistentVolume#read_only}

---

##### `secretRef`<sup>Optional</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd.property.secretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

secret_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#secret_ref PersistentVolume#secret_ref}

---

### PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef <a name="PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef;

PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.builder()
//  .name(java.lang.String)
//  .namespace(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.name">name</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#name PersistentVolume#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#namespace PersistentVolume#namespace}

---

### PersistentVolumeSpecPersistentVolumeSourceVsphereVolume <a name="PersistentVolumeSpecPersistentVolumeSourceVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume;

PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.builder()
    .volumePath(java.lang.String)
//  .fsType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.volumePath">volumePath</a></code> | <code>java.lang.String</code> | Path that identifies vSphere volume vmdk. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.fsType">fsType</a></code> | <code>java.lang.String</code> | Filesystem type to mount. |

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.volumePath"></a>

```java
public java.lang.String getVolumePath();
```

- *Type:* java.lang.String

Path that identifies vSphere volume vmdk.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#volume_path PersistentVolume#volume_path}

---

##### `fsType`<sup>Optional</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

Filesystem type to mount.

Must be a filesystem type supported by the host operating system. Ex. "ext4", "xfs", "ntfs". Implicitly inferred to be "ext4" if unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#fs_type PersistentVolume#fs_type}

---

### PersistentVolumeTimeouts <a name="PersistentVolumeTimeouts" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeTimeouts;

PersistentVolumeTimeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#create PersistentVolume#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.25.1/docs/resources/persistent_volume#create PersistentVolume#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### PersistentVolumeMetadataOutputReference <a name="PersistentVolumeMetadataOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeMetadataOutputReference;

new PersistentVolumeMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadataOutputReference.property.internalValue"></a>

```java
public PersistentVolumeMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeMetadata">PersistentVolumeMetadata</a>

---


### PersistentVolumeSpecClaimRefOutputReference <a name="PersistentVolumeSpecClaimRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecClaimRefOutputReference;

new PersistentVolumeSpecClaimRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecClaimRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---


### PersistentVolumeSpecList <a name="PersistentVolumeSpecList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecList;

new PersistentVolumeSpecList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get"></a>

```java
public PersistentVolumeSpecOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>>

---


### PersistentVolumeSpecNodeAffinityOutputReference <a name="PersistentVolumeSpecNodeAffinityOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityOutputReference;

new PersistentVolumeSpecNodeAffinityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired">putRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRequired` <a name="putRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired"></a>

```java
public void putRequired(PersistentVolumeSpecNodeAffinityRequired value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.putRequired.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.resetRequired"></a>

```java
public void resetRequired()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.required">required</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference">PersistentVolumeSpecNodeAffinityRequiredOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.requiredInput">requiredInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.required"></a>

```java
public PersistentVolumeSpecNodeAffinityRequiredOutputReference getRequired();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference">PersistentVolumeSpecNodeAffinityRequiredOutputReference</a>

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.requiredInput"></a>

```java
public PersistentVolumeSpecNodeAffinityRequired getRequiredInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecNodeAffinity getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get"></a>

```java
public PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get"></a>

```java
public PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get"></a>

```java
public PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>

---


### PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference;

new PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions">putMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields">putMatchFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions">resetMatchExpressions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields">resetMatchFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpressions` <a name="putMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions"></a>

```java
public void putMatchExpressions(IResolvable OR java.util.List<PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchExpressions.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>>

---

##### `putMatchFields` <a name="putMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields"></a>

```java
public void putMatchFields(IResolvable OR java.util.List<PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.putMatchFields.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>>

---

##### `resetMatchExpressions` <a name="resetMatchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchExpressions"></a>

```java
public void resetMatchExpressions()
```

##### `resetMatchFields` <a name="resetMatchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.resetMatchFields"></a>

```java
public void resetMatchFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions">matchExpressions</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields">matchFields</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput">matchExpressionsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput">matchFieldsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpressions`<sup>Required</sup> <a name="matchExpressions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressions"></a>

```java
public PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList getMatchExpressions();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressionsList</a>

---

##### `matchFields`<sup>Required</sup> <a name="matchFields" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFields"></a>

```java
public PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList getMatchFields();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFieldsList</a>

---

##### `matchExpressionsInput`<sup>Optional</sup> <a name="matchExpressionsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchExpressionsInput"></a>

```java
public java.lang.Object getMatchExpressionsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchExpressions</a>>

---

##### `matchFieldsInput`<sup>Optional</sup> <a name="matchFieldsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.matchFieldsInput"></a>

```java
public java.lang.Object getMatchFieldsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermMatchFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>

---


### PersistentVolumeSpecNodeAffinityRequiredOutputReference <a name="PersistentVolumeSpecNodeAffinityRequiredOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecNodeAffinityRequiredOutputReference;

new PersistentVolumeSpecNodeAffinityRequiredOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm">putNodeSelectorTerm</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNodeSelectorTerm` <a name="putNodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm"></a>

```java
public void putNodeSelectorTerm(IResolvable OR java.util.List<PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.putNodeSelectorTerm.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm">nodeSelectorTerm</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput">nodeSelectorTermInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeSelectorTerm`<sup>Required</sup> <a name="nodeSelectorTerm" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTerm"></a>

```java
public PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList getNodeSelectorTerm();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTermList</a>

---

##### `nodeSelectorTermInput`<sup>Optional</sup> <a name="nodeSelectorTermInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.nodeSelectorTermInput"></a>

```java
public java.lang.Object getNodeSelectorTermInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm">PersistentVolumeSpecNodeAffinityRequiredNodeSelectorTerm</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequiredOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecNodeAffinityRequired getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityRequired">PersistentVolumeSpecNodeAffinityRequired</a>

---


### PersistentVolumeSpecOutputReference <a name="PersistentVolumeSpecOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecOutputReference;

new PersistentVolumeSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef">putClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity">putNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource">putPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetClaimRef">resetClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetMountOptions">resetMountOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetNodeAffinity">resetNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetPersistentVolumeReclaimPolicy">resetPersistentVolumeReclaimPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetStorageClassName">resetStorageClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetVolumeMode">resetVolumeMode</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClaimRef` <a name="putClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef"></a>

```java
public void putClaimRef(PersistentVolumeSpecClaimRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putClaimRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---

##### `putNodeAffinity` <a name="putNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity"></a>

```java
public void putNodeAffinity(PersistentVolumeSpecNodeAffinity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putNodeAffinity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---

##### `putPersistentVolumeSource` <a name="putPersistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource"></a>

```java
public void putPersistentVolumeSource(PersistentVolumeSpecPersistentVolumeSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.putPersistentVolumeSource.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---

##### `resetClaimRef` <a name="resetClaimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetClaimRef"></a>

```java
public void resetClaimRef()
```

##### `resetMountOptions` <a name="resetMountOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetMountOptions"></a>

```java
public void resetMountOptions()
```

##### `resetNodeAffinity` <a name="resetNodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetNodeAffinity"></a>

```java
public void resetNodeAffinity()
```

##### `resetPersistentVolumeReclaimPolicy` <a name="resetPersistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetPersistentVolumeReclaimPolicy"></a>

```java
public void resetPersistentVolumeReclaimPolicy()
```

##### `resetStorageClassName` <a name="resetStorageClassName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetStorageClassName"></a>

```java
public void resetStorageClassName()
```

##### `resetVolumeMode` <a name="resetVolumeMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.resetVolumeMode"></a>

```java
public void resetVolumeMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRef">claimRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference">PersistentVolumeSpecClaimRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinity">nodeAffinity</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference">PersistentVolumeSpecNodeAffinityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSource">persistentVolumeSource</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference">PersistentVolumeSpecPersistentVolumeSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModesInput">accessModesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacityInput">capacityInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRefInput">claimRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptionsInput">mountOptionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinityInput">nodeAffinityInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicyInput">persistentVolumeReclaimPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSourceInput">persistentVolumeSourceInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassNameInput">storageClassNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeModeInput">volumeModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModes">accessModes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacity">capacity</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptions">mountOptions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicy">persistentVolumeReclaimPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassName">storageClassName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeMode">volumeMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `claimRef`<sup>Required</sup> <a name="claimRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRef"></a>

```java
public PersistentVolumeSpecClaimRefOutputReference getClaimRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRefOutputReference">PersistentVolumeSpecClaimRefOutputReference</a>

---

##### `nodeAffinity`<sup>Required</sup> <a name="nodeAffinity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinity"></a>

```java
public PersistentVolumeSpecNodeAffinityOutputReference getNodeAffinity();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinityOutputReference">PersistentVolumeSpecNodeAffinityOutputReference</a>

---

##### `persistentVolumeSource`<sup>Required</sup> <a name="persistentVolumeSource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSource"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceOutputReference getPersistentVolumeSource();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference">PersistentVolumeSpecPersistentVolumeSourceOutputReference</a>

---

##### `accessModesInput`<sup>Optional</sup> <a name="accessModesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModesInput"></a>

```java
public java.util.List<java.lang.String> getAccessModesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacityInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacityInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `claimRefInput`<sup>Optional</sup> <a name="claimRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.claimRefInput"></a>

```java
public PersistentVolumeSpecClaimRef getClaimRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecClaimRef">PersistentVolumeSpecClaimRef</a>

---

##### `mountOptionsInput`<sup>Optional</sup> <a name="mountOptionsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptionsInput"></a>

```java
public java.util.List<java.lang.String> getMountOptionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nodeAffinityInput`<sup>Optional</sup> <a name="nodeAffinityInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.nodeAffinityInput"></a>

```java
public PersistentVolumeSpecNodeAffinity getNodeAffinityInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecNodeAffinity">PersistentVolumeSpecNodeAffinity</a>

---

##### `persistentVolumeReclaimPolicyInput`<sup>Optional</sup> <a name="persistentVolumeReclaimPolicyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicyInput"></a>

```java
public java.lang.String getPersistentVolumeReclaimPolicyInput();
```

- *Type:* java.lang.String

---

##### `persistentVolumeSourceInput`<sup>Optional</sup> <a name="persistentVolumeSourceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeSourceInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSource getPersistentVolumeSourceInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---

##### `storageClassNameInput`<sup>Optional</sup> <a name="storageClassNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassNameInput"></a>

```java
public java.lang.String getStorageClassNameInput();
```

- *Type:* java.lang.String

---

##### `volumeModeInput`<sup>Optional</sup> <a name="volumeModeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeModeInput"></a>

```java
public java.lang.String getVolumeModeInput();
```

- *Type:* java.lang.String

---

##### `accessModes`<sup>Required</sup> <a name="accessModes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.accessModes"></a>

```java
public java.util.List<java.lang.String> getAccessModes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.capacity"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCapacity();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `mountOptions`<sup>Required</sup> <a name="mountOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.mountOptions"></a>

```java
public java.util.List<java.lang.String> getMountOptions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `persistentVolumeReclaimPolicy`<sup>Required</sup> <a name="persistentVolumeReclaimPolicy" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.persistentVolumeReclaimPolicy"></a>

```java
public java.lang.String getPersistentVolumeReclaimPolicy();
```

- *Type:* java.lang.String

---

##### `storageClassName`<sup>Required</sup> <a name="storageClassName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.storageClassName"></a>

```java
public java.lang.String getStorageClassName();
```

- *Type:* java.lang.String

---

##### `volumeMode`<sup>Required</sup> <a name="volumeMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.volumeMode"></a>

```java
public java.lang.String getVolumeMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpec">PersistentVolumeSpec</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition">partition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partitionInput"></a>

```java
public java.lang.Number getPartitionInput();
```

- *Type:* java.lang.Number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetKind"></a>

```java
public void resetKind()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput">cachingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput">dataDiskUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput">diskNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode">cachingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri">dataDiskUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName">diskName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cachingModeInput`<sup>Optional</sup> <a name="cachingModeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingModeInput"></a>

```java
public java.lang.String getCachingModeInput();
```

- *Type:* java.lang.String

---

##### `dataDiskUriInput`<sup>Optional</sup> <a name="dataDiskUriInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUriInput"></a>

```java
public java.lang.String getDataDiskUriInput();
```

- *Type:* java.lang.String

---

##### `diskNameInput`<sup>Optional</sup> <a name="diskNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskNameInput"></a>

```java
public java.lang.String getDiskNameInput();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `cachingMode`<sup>Required</sup> <a name="cachingMode" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.cachingMode"></a>

```java
public java.lang.String getCachingMode();
```

- *Type:* java.lang.String

---

##### `dataDiskUri`<sup>Required</sup> <a name="dataDiskUri" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.dataDiskUri"></a>

```java
public java.lang.String getDataDiskUri();
```

- *Type:* java.lang.String

---

##### `diskName`<sup>Required</sup> <a name="diskName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.diskName"></a>

```java
public java.lang.String getDiskName();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAzureDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace">resetSecretNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecretNamespace` <a name="resetSecretNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.resetSecretNamespace"></a>

```java
public void resetSecretNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput">secretNamespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput">shareNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace">secretNamespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareName">shareName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `secretNamespaceInput`<sup>Optional</sup> <a name="secretNamespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespaceInput"></a>

```java
public java.lang.String getSecretNamespaceInput();
```

- *Type:* java.lang.String

---

##### `shareNameInput`<sup>Optional</sup> <a name="shareNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareNameInput"></a>

```java
public java.lang.String getShareNameInput();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `secretNamespace`<sup>Required</sup> <a name="secretNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.secretNamespace"></a>

```java
public java.lang.String getSecretNamespace();
```

- *Type:* java.lang.String

---

##### `shareName`<sup>Required</sup> <a name="shareName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.shareName"></a>

```java
public java.lang.String getShareName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAzureFile getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile">resetSecretFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef"></a>

```java
public void putSecretRef(PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecretFile` <a name="resetSecretFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretFile"></a>

```java
public void resetSecretFile()
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetSecretRef"></a>

```java
public void resetSecretRef()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput">monitorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput">secretFileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitors">monitors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFile">secretFile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference</a>

---

##### `monitorsInput`<sup>Optional</sup> <a name="monitorsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitorsInput"></a>

```java
public java.util.List<java.lang.String> getMonitorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretFileInput`<sup>Optional</sup> <a name="secretFileInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFileInput"></a>

```java
public java.lang.String getSecretFileInput();
```

- *Type:* java.lang.String

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretRefInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef getSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `monitors`<sup>Required</sup> <a name="monitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.monitors"></a>

```java
public java.util.List<java.lang.String> getMonitors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretFile`<sup>Required</sup> <a name="secretFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.secretFile"></a>

```java
public java.lang.String getSecretFile();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCephFs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef">PersistentVolumeSpecPersistentVolumeSourceCephFsSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCinder getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef">putControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef">putControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef">putNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef">putNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef">resetControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef">resetControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef">resetNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef">resetNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes">resetVolumeAttributes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putControllerExpandSecretRef` <a name="putControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef"></a>

```java
public void putControllerExpandSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerExpandSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `putControllerPublishSecretRef` <a name="putControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef"></a>

```java
public void putControllerPublishSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putControllerPublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `putNodePublishSecretRef` <a name="putNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef"></a>

```java
public void putNodePublishSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodePublishSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `putNodeStageSecretRef` <a name="putNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef"></a>

```java
public void putNodeStageSecretRef(PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.putNodeStageSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `resetControllerExpandSecretRef` <a name="resetControllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerExpandSecretRef"></a>

```java
public void resetControllerExpandSecretRef()
```

##### `resetControllerPublishSecretRef` <a name="resetControllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetControllerPublishSecretRef"></a>

```java
public void resetControllerPublishSecretRef()
```

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetNodePublishSecretRef` <a name="resetNodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodePublishSecretRef"></a>

```java
public void resetNodePublishSecretRef()
```

##### `resetNodeStageSecretRef` <a name="resetNodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetNodeStageSecretRef"></a>

```java
public void resetNodeStageSecretRef()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetVolumeAttributes` <a name="resetVolumeAttributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.resetVolumeAttributes"></a>

```java
public void resetVolumeAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef">controllerExpandSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef">controllerPublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef">nodePublishSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef">nodeStageSecretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput">controllerExpandSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput">controllerPublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driverInput">driverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput">nodePublishSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput">nodeStageSecretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput">volumeAttributesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput">volumeHandleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driver">driver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes">volumeAttributes</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle">volumeHandle</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `controllerExpandSecretRef`<sup>Required</sup> <a name="controllerExpandSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference getControllerExpandSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRefOutputReference</a>

---

##### `controllerPublishSecretRef`<sup>Required</sup> <a name="controllerPublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference getControllerPublishSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRefOutputReference</a>

---

##### `nodePublishSecretRef`<sup>Required</sup> <a name="nodePublishSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference getNodePublishSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRefOutputReference</a>

---

##### `nodeStageSecretRef`<sup>Required</sup> <a name="nodeStageSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference getNodeStageSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRefOutputReference</a>

---

##### `controllerExpandSecretRefInput`<sup>Optional</sup> <a name="controllerExpandSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerExpandSecretRefInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef getControllerExpandSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerExpandSecretRef</a>

---

##### `controllerPublishSecretRefInput`<sup>Optional</sup> <a name="controllerPublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.controllerPublishSecretRefInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef getControllerPublishSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiControllerPublishSecretRef</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driverInput"></a>

```java
public java.lang.String getDriverInput();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `nodePublishSecretRefInput`<sup>Optional</sup> <a name="nodePublishSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodePublishSecretRefInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef getNodePublishSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodePublishSecretRef</a>

---

##### `nodeStageSecretRefInput`<sup>Optional</sup> <a name="nodeStageSecretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.nodeStageSecretRefInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef getNodeStageSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef">PersistentVolumeSpecPersistentVolumeSourceCsiNodeStageSecretRef</a>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeAttributesInput`<sup>Optional</sup> <a name="volumeAttributesInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeAttributesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeHandleInput`<sup>Optional</sup> <a name="volumeHandleInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandleInput"></a>

```java
public java.lang.String getVolumeHandleInput();
```

- *Type:* java.lang.String

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeAttributes`<sup>Required</sup> <a name="volumeAttributes" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeAttributes"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getVolumeAttributes();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `volumeHandle`<sup>Required</sup> <a name="volumeHandle" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.volumeHandle"></a>

```java
public java.lang.String getVolumeHandle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFcOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFcOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceFcOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lunInput">lunInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput">targetWwNsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lun">lun</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNs">targetWwNs</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lunInput"></a>

```java
public java.lang.Number getLunInput();
```

- *Type:* java.lang.Number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetWwNsInput`<sup>Optional</sup> <a name="targetWwNsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNsInput"></a>

```java
public java.util.List<java.lang.String> getTargetWwNsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetWwNs`<sup>Required</sup> <a name="targetWwNs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.targetWwNs"></a>

```java
public java.util.List<java.lang.String> getTargetWwNs();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFc getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef"></a>

```java
public void putSecretRef(PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetOptions` <a name="resetOptions" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.resetSecretRef"></a>

```java
public void resetSecretRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput">driverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput">optionsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver">driver</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.options">options</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference</a>

---

##### `driverInput`<sup>Optional</sup> <a name="driverInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driverInput"></a>

```java
public java.lang.String getDriverInput();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.optionsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptionsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.secretRefInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef getSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---

##### `driver`<sup>Required</sup> <a name="driver" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.driver"></a>

```java
public java.lang.String getDriver();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.options"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getOptions();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlexVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName">resetDatasetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid">resetDatasetUuid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatasetName` <a name="resetDatasetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetName"></a>

```java
public void resetDatasetName()
```

##### `resetDatasetUuid` <a name="resetDatasetUuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.resetDatasetUuid"></a>

```java
public void resetDatasetUuid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput">datasetNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput">datasetUuidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetName">datasetName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid">datasetUuid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetNameInput`<sup>Optional</sup> <a name="datasetNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetNameInput"></a>

```java
public java.lang.String getDatasetNameInput();
```

- *Type:* java.lang.String

---

##### `datasetUuidInput`<sup>Optional</sup> <a name="datasetUuidInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuidInput"></a>

```java
public java.lang.String getDatasetUuidInput();
```

- *Type:* java.lang.String

---

##### `datasetName`<sup>Required</sup> <a name="datasetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetName"></a>

```java
public java.lang.String getDatasetName();
```

- *Type:* java.lang.String

---

##### `datasetUuid`<sup>Required</sup> <a name="datasetUuid" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.datasetUuid"></a>

```java
public java.lang.String getDatasetUuid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlocker getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---


### PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition">resetPartition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetPartition` <a name="resetPartition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetPartition"></a>

```java
public void resetPartition()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput">partitionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput">pdNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition">partition</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName">pdName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `partitionInput`<sup>Optional</sup> <a name="partitionInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partitionInput"></a>

```java
public java.lang.Number getPartitionInput();
```

- *Type:* java.lang.Number

---

##### `pdNameInput`<sup>Optional</sup> <a name="pdNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdNameInput"></a>

```java
public java.lang.String getPdNameInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `partition`<sup>Required</sup> <a name="partition" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.partition"></a>

```java
public java.lang.Number getPartition();
```

- *Type:* java.lang.Number

---

##### `pdName`<sup>Required</sup> <a name="pdName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.pdName"></a>

```java
public java.lang.String getPdName();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput">endpointsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName">endpointsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpointsNameInput`<sup>Optional</sup> <a name="endpointsNameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsNameInput"></a>

```java
public java.lang.String getEndpointsNameInput();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `endpointsName`<sup>Required</sup> <a name="endpointsName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.endpointsName"></a>

```java
public java.lang.String getEndpointsName();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceGlusterfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceHostPath getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---


### PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface">resetIscsiInterface</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetLun">resetLun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetIscsiInterface` <a name="resetIscsiInterface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetIscsiInterface"></a>

```java
public void resetIscsiInterface()
```

##### `resetLun` <a name="resetLun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetLun"></a>

```java
public void resetLun()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput">iqnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput">iscsiInterfaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lunInput">lunInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput">targetPortalInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqn">iqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface">iscsiInterface</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lun">lun</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal">targetPortal</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `iqnInput`<sup>Optional</sup> <a name="iqnInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqnInput"></a>

```java
public java.lang.String getIqnInput();
```

- *Type:* java.lang.String

---

##### `iscsiInterfaceInput`<sup>Optional</sup> <a name="iscsiInterfaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterfaceInput"></a>

```java
public java.lang.String getIscsiInterfaceInput();
```

- *Type:* java.lang.String

---

##### `lunInput`<sup>Optional</sup> <a name="lunInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lunInput"></a>

```java
public java.lang.Number getLunInput();
```

- *Type:* java.lang.Number

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetPortalInput`<sup>Optional</sup> <a name="targetPortalInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortalInput"></a>

```java
public java.lang.String getTargetPortalInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iqn"></a>

```java
public java.lang.String getIqn();
```

- *Type:* java.lang.String

---

##### `iscsiInterface`<sup>Required</sup> <a name="iscsiInterface" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.iscsiInterface"></a>

```java
public java.lang.String getIscsiInterface();
```

- *Type:* java.lang.String

---

##### `lun`<sup>Required</sup> <a name="lun" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.lun"></a>

```java
public java.lang.Number getLun();
```

- *Type:* java.lang.Number

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `targetPortal`<sup>Required</sup> <a name="targetPortal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.targetPortal"></a>

```java
public java.lang.String getTargetPortal();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceIscsi getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---


### PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceLocal getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---


### PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.serverInput">serverInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.server">server</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `serverInput`<sup>Optional</sup> <a name="serverInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.serverInput"></a>

```java
public java.lang.String getServerInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `server`<sup>Required</sup> <a name="server" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.server"></a>

```java
public java.lang.String getServer();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceNfs getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---


### PersistentVolumeSpecPersistentVolumeSourceOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore">putAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk">putAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile">putAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs">putCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder">putCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi">putCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc">putFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume">putFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker">putFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk">putGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs">putGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath">putHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi">putIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal">putLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs">putNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk">putPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte">putQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd">putRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume">putVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore">resetAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureDisk">resetAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureFile">resetAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCephFs">resetCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCinder">resetCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCsi">resetCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFc">resetFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlexVolume">resetFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlocker">resetFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk">resetGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGlusterfs">resetGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetHostPath">resetHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetIscsi">resetIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetLocal">resetLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetNfs">resetNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk">resetPhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetQuobyte">resetQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetRbd">resetRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetVsphereVolume">resetVsphereVolume</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAwsElasticBlockStore` <a name="putAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore"></a>

```java
public void putAwsElasticBlockStore(PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAwsElasticBlockStore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `putAzureDisk` <a name="putAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk"></a>

```java
public void putAzureDisk(PersistentVolumeSpecPersistentVolumeSourceAzureDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---

##### `putAzureFile` <a name="putAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile"></a>

```java
public void putAzureFile(PersistentVolumeSpecPersistentVolumeSourceAzureFile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putAzureFile.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---

##### `putCephFs` <a name="putCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs"></a>

```java
public void putCephFs(PersistentVolumeSpecPersistentVolumeSourceCephFs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCephFs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---

##### `putCinder` <a name="putCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder"></a>

```java
public void putCinder(PersistentVolumeSpecPersistentVolumeSourceCinder value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCinder.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---

##### `putCsi` <a name="putCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi"></a>

```java
public void putCsi(PersistentVolumeSpecPersistentVolumeSourceCsi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putCsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---

##### `putFc` <a name="putFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc"></a>

```java
public void putFc(PersistentVolumeSpecPersistentVolumeSourceFc value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFc.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---

##### `putFlexVolume` <a name="putFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume"></a>

```java
public void putFlexVolume(PersistentVolumeSpecPersistentVolumeSourceFlexVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlexVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---

##### `putFlocker` <a name="putFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker"></a>

```java
public void putFlocker(PersistentVolumeSpecPersistentVolumeSourceFlocker value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putFlocker.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---

##### `putGcePersistentDisk` <a name="putGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk"></a>

```java
public void putGcePersistentDisk(PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGcePersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `putGlusterfs` <a name="putGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs"></a>

```java
public void putGlusterfs(PersistentVolumeSpecPersistentVolumeSourceGlusterfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putGlusterfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---

##### `putHostPath` <a name="putHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath"></a>

```java
public void putHostPath(PersistentVolumeSpecPersistentVolumeSourceHostPath value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putHostPath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---

##### `putIscsi` <a name="putIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi"></a>

```java
public void putIscsi(PersistentVolumeSpecPersistentVolumeSourceIscsi value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putIscsi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---

##### `putLocal` <a name="putLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal"></a>

```java
public void putLocal(PersistentVolumeSpecPersistentVolumeSourceLocal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putLocal.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---

##### `putNfs` <a name="putNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs"></a>

```java
public void putNfs(PersistentVolumeSpecPersistentVolumeSourceNfs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putNfs.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---

##### `putPhotonPersistentDisk` <a name="putPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk"></a>

```java
public void putPhotonPersistentDisk(PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putPhotonPersistentDisk.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `putQuobyte` <a name="putQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte"></a>

```java
public void putQuobyte(PersistentVolumeSpecPersistentVolumeSourceQuobyte value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putQuobyte.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---

##### `putRbd` <a name="putRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd"></a>

```java
public void putRbd(PersistentVolumeSpecPersistentVolumeSourceRbd value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putRbd.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---

##### `putVsphereVolume` <a name="putVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume"></a>

```java
public void putVsphereVolume(PersistentVolumeSpecPersistentVolumeSourceVsphereVolume value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.putVsphereVolume.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---

##### `resetAwsElasticBlockStore` <a name="resetAwsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAwsElasticBlockStore"></a>

```java
public void resetAwsElasticBlockStore()
```

##### `resetAzureDisk` <a name="resetAzureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureDisk"></a>

```java
public void resetAzureDisk()
```

##### `resetAzureFile` <a name="resetAzureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetAzureFile"></a>

```java
public void resetAzureFile()
```

##### `resetCephFs` <a name="resetCephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCephFs"></a>

```java
public void resetCephFs()
```

##### `resetCinder` <a name="resetCinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCinder"></a>

```java
public void resetCinder()
```

##### `resetCsi` <a name="resetCsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetCsi"></a>

```java
public void resetCsi()
```

##### `resetFc` <a name="resetFc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFc"></a>

```java
public void resetFc()
```

##### `resetFlexVolume` <a name="resetFlexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlexVolume"></a>

```java
public void resetFlexVolume()
```

##### `resetFlocker` <a name="resetFlocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetFlocker"></a>

```java
public void resetFlocker()
```

##### `resetGcePersistentDisk` <a name="resetGcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGcePersistentDisk"></a>

```java
public void resetGcePersistentDisk()
```

##### `resetGlusterfs` <a name="resetGlusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetGlusterfs"></a>

```java
public void resetGlusterfs()
```

##### `resetHostPath` <a name="resetHostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetHostPath"></a>

```java
public void resetHostPath()
```

##### `resetIscsi` <a name="resetIscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetIscsi"></a>

```java
public void resetIscsi()
```

##### `resetLocal` <a name="resetLocal" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetLocal"></a>

```java
public void resetLocal()
```

##### `resetNfs` <a name="resetNfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetNfs"></a>

```java
public void resetNfs()
```

##### `resetPhotonPersistentDisk` <a name="resetPhotonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetPhotonPersistentDisk"></a>

```java
public void resetPhotonPersistentDisk()
```

##### `resetQuobyte` <a name="resetQuobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetQuobyte"></a>

```java
public void resetQuobyte()
```

##### `resetRbd` <a name="resetRbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetRbd"></a>

```java
public void resetRbd()
```

##### `resetVsphereVolume` <a name="resetVsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.resetVsphereVolume"></a>

```java
public void resetVsphereVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore">awsElasticBlockStore</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDisk">azureDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFile">azureFile</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFs">cephFs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinder">cinder</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csi">csi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fc">fc</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference">PersistentVolumeSpecPersistentVolumeSourceFcOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolume">flexVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flocker">flocker</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk">gcePersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfs">glusterfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPath">hostPath</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsi">iscsi</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.local">local</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfs">nfs</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk">photonPersistentDisk</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyte">quobyte</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbd">rbd</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolume">vsphereVolume</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput">awsElasticBlockStoreInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDiskInput">azureDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFileInput">azureFileInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFsInput">cephFsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinderInput">cinderInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csiInput">csiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fcInput">fcInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolumeInput">flexVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flockerInput">flockerInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput">gcePersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfsInput">glusterfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPathInput">hostPathInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsiInput">iscsiInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.localInput">localInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfsInput">nfsInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput">photonPersistentDiskInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyteInput">quobyteInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbdInput">rbdInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput">vsphereVolumeInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsElasticBlockStore`<sup>Required</sup> <a name="awsElasticBlockStore" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStore"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference getAwsElasticBlockStore();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStoreOutputReference</a>

---

##### `azureDisk`<sup>Required</sup> <a name="azureDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDisk"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference getAzureDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureDiskOutputReference</a>

---

##### `azureFile`<sup>Required</sup> <a name="azureFile" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFile"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference getAzureFile();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference">PersistentVolumeSpecPersistentVolumeSourceAzureFileOutputReference</a>

---

##### `cephFs`<sup>Required</sup> <a name="cephFs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFs"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference getCephFs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference">PersistentVolumeSpecPersistentVolumeSourceCephFsOutputReference</a>

---

##### `cinder`<sup>Required</sup> <a name="cinder" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinder"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference getCinder();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference">PersistentVolumeSpecPersistentVolumeSourceCinderOutputReference</a>

---

##### `csi`<sup>Required</sup> <a name="csi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csi"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference getCsi();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceCsiOutputReference</a>

---

##### `fc`<sup>Required</sup> <a name="fc" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fc"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFcOutputReference getFc();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFcOutputReference">PersistentVolumeSpecPersistentVolumeSourceFcOutputReference</a>

---

##### `flexVolume`<sup>Required</sup> <a name="flexVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolume"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference getFlexVolume();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlexVolumeOutputReference</a>

---

##### `flocker`<sup>Required</sup> <a name="flocker" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flocker"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference getFlocker();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference">PersistentVolumeSpecPersistentVolumeSourceFlockerOutputReference</a>

---

##### `gcePersistentDisk`<sup>Required</sup> <a name="gcePersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDisk"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference getGcePersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDiskOutputReference</a>

---

##### `glusterfs`<sup>Required</sup> <a name="glusterfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfs"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference getGlusterfs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceGlusterfsOutputReference</a>

---

##### `hostPath`<sup>Required</sup> <a name="hostPath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPath"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference getHostPath();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference">PersistentVolumeSpecPersistentVolumeSourceHostPathOutputReference</a>

---

##### `iscsi`<sup>Required</sup> <a name="iscsi" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsi"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference getIscsi();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference">PersistentVolumeSpecPersistentVolumeSourceIscsiOutputReference</a>

---

##### `local`<sup>Required</sup> <a name="local" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.local"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference getLocal();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference">PersistentVolumeSpecPersistentVolumeSourceLocalOutputReference</a>

---

##### `nfs`<sup>Required</sup> <a name="nfs" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfs"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference getNfs();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference">PersistentVolumeSpecPersistentVolumeSourceNfsOutputReference</a>

---

##### `photonPersistentDisk`<sup>Required</sup> <a name="photonPersistentDisk" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDisk"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference getPhotonPersistentDisk();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference</a>

---

##### `quobyte`<sup>Required</sup> <a name="quobyte" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyte"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference getQuobyte();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference">PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference</a>

---

##### `rbd`<sup>Required</sup> <a name="rbd" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbd"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference getRbd();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference</a>

---

##### `vsphereVolume`<sup>Required</sup> <a name="vsphereVolume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolume"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference getVsphereVolume();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference">PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference</a>

---

##### `awsElasticBlockStoreInput`<sup>Optional</sup> <a name="awsElasticBlockStoreInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.awsElasticBlockStoreInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore getAwsElasticBlockStoreInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore">PersistentVolumeSpecPersistentVolumeSourceAwsElasticBlockStore</a>

---

##### `azureDiskInput`<sup>Optional</sup> <a name="azureDiskInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureDiskInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAzureDisk getAzureDiskInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureDisk">PersistentVolumeSpecPersistentVolumeSourceAzureDisk</a>

---

##### `azureFileInput`<sup>Optional</sup> <a name="azureFileInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.azureFileInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceAzureFile getAzureFileInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceAzureFile">PersistentVolumeSpecPersistentVolumeSourceAzureFile</a>

---

##### `cephFsInput`<sup>Optional</sup> <a name="cephFsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cephFsInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCephFs getCephFsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCephFs">PersistentVolumeSpecPersistentVolumeSourceCephFs</a>

---

##### `cinderInput`<sup>Optional</sup> <a name="cinderInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.cinderInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCinder getCinderInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCinder">PersistentVolumeSpecPersistentVolumeSourceCinder</a>

---

##### `csiInput`<sup>Optional</sup> <a name="csiInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.csiInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceCsi getCsiInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceCsi">PersistentVolumeSpecPersistentVolumeSourceCsi</a>

---

##### `fcInput`<sup>Optional</sup> <a name="fcInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.fcInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFc getFcInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFc">PersistentVolumeSpecPersistentVolumeSourceFc</a>

---

##### `flexVolumeInput`<sup>Optional</sup> <a name="flexVolumeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flexVolumeInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlexVolume getFlexVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlexVolume">PersistentVolumeSpecPersistentVolumeSourceFlexVolume</a>

---

##### `flockerInput`<sup>Optional</sup> <a name="flockerInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.flockerInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceFlocker getFlockerInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceFlocker">PersistentVolumeSpecPersistentVolumeSourceFlocker</a>

---

##### `gcePersistentDiskInput`<sup>Optional</sup> <a name="gcePersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.gcePersistentDiskInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk getGcePersistentDiskInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk">PersistentVolumeSpecPersistentVolumeSourceGcePersistentDisk</a>

---

##### `glusterfsInput`<sup>Optional</sup> <a name="glusterfsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.glusterfsInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceGlusterfs getGlusterfsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceGlusterfs">PersistentVolumeSpecPersistentVolumeSourceGlusterfs</a>

---

##### `hostPathInput`<sup>Optional</sup> <a name="hostPathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.hostPathInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceHostPath getHostPathInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceHostPath">PersistentVolumeSpecPersistentVolumeSourceHostPath</a>

---

##### `iscsiInput`<sup>Optional</sup> <a name="iscsiInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.iscsiInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceIscsi getIscsiInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceIscsi">PersistentVolumeSpecPersistentVolumeSourceIscsi</a>

---

##### `localInput`<sup>Optional</sup> <a name="localInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.localInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceLocal getLocalInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceLocal">PersistentVolumeSpecPersistentVolumeSourceLocal</a>

---

##### `nfsInput`<sup>Optional</sup> <a name="nfsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.nfsInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceNfs getNfsInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceNfs">PersistentVolumeSpecPersistentVolumeSourceNfs</a>

---

##### `photonPersistentDiskInput`<sup>Optional</sup> <a name="photonPersistentDiskInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.photonPersistentDiskInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk getPhotonPersistentDiskInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---

##### `quobyteInput`<sup>Optional</sup> <a name="quobyteInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.quobyteInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceQuobyte getQuobyteInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---

##### `rbdInput`<sup>Optional</sup> <a name="rbdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.rbdInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceRbd getRbdInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---

##### `vsphereVolumeInput`<sup>Optional</sup> <a name="vsphereVolumeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.vsphereVolumeInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceVsphereVolume getVsphereVolumeInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSource getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSource">PersistentVolumeSpecPersistentVolumeSource</a>

---


### PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference;

new PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType">resetFsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.resetFsType"></a>

```java
public void resetFsType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput">pdIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId">pdId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `pdIdInput`<sup>Optional</sup> <a name="pdIdInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdIdInput"></a>

```java
public java.lang.String getPdIdInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `pdId`<sup>Required</sup> <a name="pdId" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.pdId"></a>

```java
public java.lang.String getPdId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDiskOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk">PersistentVolumeSpecPersistentVolumeSourcePhotonPersistentDisk</a>

---


### PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGroup` <a name="resetGroup" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetGroup"></a>

```java
public void resetGroup()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetUser` <a name="resetUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.resetUser"></a>

```java
public void resetUser()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput">groupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput">registryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.userInput">userInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput">volumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.group">group</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registry">registry</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.user">user</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volume">volume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.groupInput"></a>

```java
public java.lang.String getGroupInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `registryInput`<sup>Optional</sup> <a name="registryInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registryInput"></a>

```java
public java.lang.String getRegistryInput();
```

- *Type:* java.lang.String

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.userInput"></a>

```java
public java.lang.String getUserInput();
```

- *Type:* java.lang.String

---

##### `volumeInput`<sup>Optional</sup> <a name="volumeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volumeInput"></a>

```java
public java.lang.String getVolumeInput();
```

- *Type:* java.lang.String

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.group"></a>

```java
public java.lang.String getGroup();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `registry`<sup>Required</sup> <a name="registry" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.registry"></a>

```java
public java.lang.String getRegistry();
```

- *Type:* java.lang.String

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.user"></a>

```java
public java.lang.String getUser();
```

- *Type:* java.lang.String

---

##### `volume`<sup>Required</sup> <a name="volume" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyteOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceQuobyte getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceQuobyte">PersistentVolumeSpecPersistentVolumeSourceQuobyte</a>

---


### PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef">putSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetFsType">resetFsType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetKeyring">resetKeyring</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRadosUser">resetRadosUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRbdPool">resetRbdPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetReadOnly">resetReadOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetSecretRef">resetSecretRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretRef` <a name="putSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef"></a>

```java
public void putSecretRef(PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.putSecretRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetFsType"></a>

```java
public void resetFsType()
```

##### `resetKeyring` <a name="resetKeyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetKeyring"></a>

```java
public void resetKeyring()
```

##### `resetRadosUser` <a name="resetRadosUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRadosUser"></a>

```java
public void resetRadosUser()
```

##### `resetRbdPool` <a name="resetRbdPool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetRbdPool"></a>

```java
public void resetRbdPool()
```

##### `resetReadOnly` <a name="resetReadOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetReadOnly"></a>

```java
public void resetReadOnly()
```

##### `resetSecretRef` <a name="resetSecretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.resetSecretRef"></a>

```java
public void resetSecretRef()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRef">secretRef</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput">cephMonitorsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyringInput">keyringInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput">radosUserInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput">rbdImageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput">rbdPoolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput">readOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput">secretRefInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors">cephMonitors</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyring">keyring</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUser">radosUser</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImage">rbdImage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPool">rbdPool</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnly">readOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRef"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference getSecretRef();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference</a>

---

##### `cephMonitorsInput`<sup>Optional</sup> <a name="cephMonitorsInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitorsInput"></a>

```java
public java.util.List<java.lang.String> getCephMonitorsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `keyringInput`<sup>Optional</sup> <a name="keyringInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyringInput"></a>

```java
public java.lang.String getKeyringInput();
```

- *Type:* java.lang.String

---

##### `radosUserInput`<sup>Optional</sup> <a name="radosUserInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUserInput"></a>

```java
public java.lang.String getRadosUserInput();
```

- *Type:* java.lang.String

---

##### `rbdImageInput`<sup>Optional</sup> <a name="rbdImageInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImageInput"></a>

```java
public java.lang.String getRbdImageInput();
```

- *Type:* java.lang.String

---

##### `rbdPoolInput`<sup>Optional</sup> <a name="rbdPoolInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPoolInput"></a>

```java
public java.lang.String getRbdPoolInput();
```

- *Type:* java.lang.String

---

##### `readOnlyInput`<sup>Optional</sup> <a name="readOnlyInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnlyInput"></a>

```java
public java.lang.Object getReadOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `secretRefInput`<sup>Optional</sup> <a name="secretRefInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.secretRefInput"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef getSecretRefInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---

##### `cephMonitors`<sup>Required</sup> <a name="cephMonitors" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.cephMonitors"></a>

```java
public java.util.List<java.lang.String> getCephMonitors();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `keyring`<sup>Required</sup> <a name="keyring" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.keyring"></a>

```java
public java.lang.String getKeyring();
```

- *Type:* java.lang.String

---

##### `radosUser`<sup>Required</sup> <a name="radosUser" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.radosUser"></a>

```java
public java.lang.String getRadosUser();
```

- *Type:* java.lang.String

---

##### `rbdImage`<sup>Required</sup> <a name="rbdImage" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdImage"></a>

```java
public java.lang.String getRbdImage();
```

- *Type:* java.lang.String

---

##### `rbdPool`<sup>Required</sup> <a name="rbdPool" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.rbdPool"></a>

```java
public java.lang.String getRbdPool();
```

- *Type:* java.lang.String

---

##### `readOnly`<sup>Required</sup> <a name="readOnly" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.readOnly"></a>

```java
public java.lang.Object getReadOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceRbd getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbd">PersistentVolumeSpecPersistentVolumeSourceRbd</a>

---


### PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRefOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef">PersistentVolumeSpecPersistentVolumeSourceRbdSecretRef</a>

---


### PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference <a name="PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference;

new PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType">resetFsType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFsType` <a name="resetFsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.resetFsType"></a>

```java
public void resetFsType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput">fsTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput">volumePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType">fsType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath">volumePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fsTypeInput`<sup>Optional</sup> <a name="fsTypeInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsTypeInput"></a>

```java
public java.lang.String getFsTypeInput();
```

- *Type:* java.lang.String

---

##### `volumePathInput`<sup>Optional</sup> <a name="volumePathInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePathInput"></a>

```java
public java.lang.String getVolumePathInput();
```

- *Type:* java.lang.String

---

##### `fsType`<sup>Required</sup> <a name="fsType" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.fsType"></a>

```java
public java.lang.String getFsType();
```

- *Type:* java.lang.String

---

##### `volumePath`<sup>Required</sup> <a name="volumePath" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.volumePath"></a>

```java
public java.lang.String getVolumePath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolumeOutputReference.property.internalValue"></a>

```java
public PersistentVolumeSpecPersistentVolumeSourceVsphereVolume getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeSpecPersistentVolumeSourceVsphereVolume">PersistentVolumeSpecPersistentVolumeSourceVsphereVolume</a>

---


### PersistentVolumeTimeoutsOutputReference <a name="PersistentVolumeTimeoutsOutputReference" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.persistent_volume.PersistentVolumeTimeoutsOutputReference;

new PersistentVolumeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.persistentVolume.PersistentVolumeTimeouts">PersistentVolumeTimeouts</a>

---



