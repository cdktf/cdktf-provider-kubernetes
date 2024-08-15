# `resourceQuota` Submodule <a name="`resourceQuota` Submodule" id="@cdktf/provider-kubernetes.resourceQuota"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ResourceQuota <a name="ResourceQuota" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota kubernetes_resource_quota}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuota;

ResourceQuota.Builder.create(Construct scope, java.lang.String id)
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
    .metadata(ResourceQuotaMetadata)
//  .id(java.lang.String)
//  .spec(ResourceQuotaSpec)
//  .timeouts(ResourceQuotaTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#id ResourceQuota#id}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#metadata ResourceQuota#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#id ResourceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#spec ResourceQuota#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#timeouts ResourceQuota#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetSpec">resetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata"></a>

```java
public void putMetadata(ResourceQuotaMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec"></a>

```java
public void putSpec(ResourceQuotaSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts"></a>

```java
public void putTimeouts(ResourceQuotaTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetId"></a>

```java
public void resetId()
```

##### `resetSpec` <a name="resetSpec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetSpec"></a>

```java
public void resetSpec()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ResourceQuota resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuota;

ResourceQuota.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuota;

ResourceQuota.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuota;

ResourceQuota.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuota;

ResourceQuota.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ResourceQuota.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ResourceQuota resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ResourceQuota to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ResourceQuota that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ResourceQuota to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference">ResourceQuotaMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference">ResourceQuotaSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference">ResourceQuotaTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadata"></a>

```java
public ResourceQuotaMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference">ResourceQuotaMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.spec"></a>

```java
public ResourceQuotaSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference">ResourceQuotaSpecOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeouts"></a>

```java
public ResourceQuotaTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference">ResourceQuotaTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.metadataInput"></a>

```java
public ResourceQuotaMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.specInput"></a>

```java
public ResourceQuotaSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuota.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ResourceQuotaConfig <a name="ResourceQuotaConfig" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaConfig;

ResourceQuotaConfig.builder()
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
    .metadata(ResourceQuotaMetadata)
//  .id(java.lang.String)
//  .spec(ResourceQuotaSpec)
//  .timeouts(ResourceQuotaTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#id ResourceQuota#id}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.metadata"></a>

```java
public ResourceQuotaMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#metadata ResourceQuota#metadata}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#id ResourceQuota#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spec`<sup>Optional</sup> <a name="spec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.spec"></a>

```java
public ResourceQuotaSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#spec ResourceQuota#spec}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaConfig.property.timeouts"></a>

```java
public ResourceQuotaTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#timeouts ResourceQuota#timeouts}

---

### ResourceQuotaMetadata <a name="ResourceQuotaMetadata" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaMetadata;

ResourceQuotaMetadata.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the resource quota must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the resource quota that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#annotations ResourceQuota#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#generate_name ResourceQuota#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the resource quota.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#labels ResourceQuota#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource quota, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#name ResourceQuota#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the resource quota must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#namespace ResourceQuota#namespace}

---

### ResourceQuotaSpec <a name="ResourceQuotaSpec" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaSpec;

ResourceQuotaSpec.builder()
//  .hard(java.util.Map<java.lang.String, java.lang.String>)
//  .scopes(java.util.List<java.lang.String>)
//  .scopeSelector(ResourceQuotaSpecScopeSelector)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.hard">hard</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | A collection of filters that must match each object tracked by a quota. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopeSelector">scopeSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a></code> | scope_selector block. |

---

##### `hard`<sup>Optional</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.hard"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHard();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The set of desired hard limits for each named resource. More info: http://releases.k8s.io/HEAD/docs/design/admission_control_resource_quota.md#admissioncontrol-plugin-resourcequota.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#hard ResourceQuota#hard}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

A collection of filters that must match each object tracked by a quota.

If not specified, the quota matches all objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#scopes ResourceQuota#scopes}

---

##### `scopeSelector`<sup>Optional</sup> <a name="scopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec.property.scopeSelector"></a>

```java
public ResourceQuotaSpecScopeSelector getScopeSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

scope_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#scope_selector ResourceQuota#scope_selector}

---

### ResourceQuotaSpecScopeSelector <a name="ResourceQuotaSpecScopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaSpecScopeSelector;

ResourceQuotaSpecScopeSelector.builder()
//  .matchExpression(IResolvable)
//  .matchExpression(java.util.List<ResourceQuotaSpecScopeSelectorMatchExpression>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector.property.matchExpression">matchExpression</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>></code> | match_expression block. |

---

##### `matchExpression`<sup>Optional</sup> <a name="matchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector.property.matchExpression"></a>

```java
public java.lang.Object getMatchExpression();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>>

match_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#match_expression ResourceQuota#match_expression}

---

### ResourceQuotaSpecScopeSelectorMatchExpression <a name="ResourceQuotaSpecScopeSelectorMatchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaSpecScopeSelectorMatchExpression;

ResourceQuotaSpecScopeSelectorMatchExpression.builder()
    .operator(java.lang.String)
    .scopeName(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.operator">operator</a></code> | <code>java.lang.String</code> | Represents a scope's relationship to a set of values. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.scopeName">scopeName</a></code> | <code>java.lang.String</code> | The name of the scope that the selector applies to. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | A list of scope selector requirements by scope of the resources. |

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

Represents a scope's relationship to a set of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#operator ResourceQuota#operator}

---

##### `scopeName`<sup>Required</sup> <a name="scopeName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.scopeName"></a>

```java
public java.lang.String getScopeName();
```

- *Type:* java.lang.String

The name of the scope that the selector applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#scope_name ResourceQuota#scope_name}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

A list of scope selector requirements by scope of the resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#values ResourceQuota#values}

---

### ResourceQuotaTimeouts <a name="ResourceQuotaTimeouts" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaTimeouts;

ResourceQuotaTimeouts.builder()
//  .create(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#create ResourceQuota#create}. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#update ResourceQuota#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#create ResourceQuota#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.32.0/docs/resources/resource_quota#update ResourceQuota#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ResourceQuotaMetadataOutputReference <a name="ResourceQuotaMetadataOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaMetadataOutputReference;

new ResourceQuotaMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadataOutputReference.property.internalValue"></a>

```java
public ResourceQuotaMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaMetadata">ResourceQuotaMetadata</a>

---


### ResourceQuotaSpecOutputReference <a name="ResourceQuotaSpecOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaSpecOutputReference;

new ResourceQuotaSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.putScopeSelector">putScopeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetHard">resetHard</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopeSelector">resetScopeSelector</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScopeSelector` <a name="putScopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.putScopeSelector"></a>

```java
public void putScopeSelector(ResourceQuotaSpecScopeSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.putScopeSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

---

##### `resetHard` <a name="resetHard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetHard"></a>

```java
public void resetHard()
```

##### `resetScopes` <a name="resetScopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetScopeSelector` <a name="resetScopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.resetScopeSelector"></a>

```java
public void resetScopeSelector()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelector">scopeSelector</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference">ResourceQuotaSpecScopeSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hardInput">hardInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelectorInput">scopeSelectorInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hard">hard</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scopeSelector`<sup>Required</sup> <a name="scopeSelector" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelector"></a>

```java
public ResourceQuotaSpecScopeSelectorOutputReference getScopeSelector();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference">ResourceQuotaSpecScopeSelectorOutputReference</a>

---

##### `hardInput`<sup>Optional</sup> <a name="hardInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hardInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHardInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `scopeSelectorInput`<sup>Optional</sup> <a name="scopeSelectorInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopeSelectorInput"></a>

```java
public ResourceQuotaSpecScopeSelector getScopeSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hard`<sup>Required</sup> <a name="hard" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.hard"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHard();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecOutputReference.property.internalValue"></a>

```java
public ResourceQuotaSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpec">ResourceQuotaSpec</a>

---


### ResourceQuotaSpecScopeSelectorMatchExpressionList <a name="ResourceQuotaSpecScopeSelectorMatchExpressionList" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaSpecScopeSelectorMatchExpressionList;

new ResourceQuotaSpecScopeSelectorMatchExpressionList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.get"></a>

```java
public ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>>

---


### ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference <a name="ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference;

new ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operatorInput">operatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput">scopeNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operator">operator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeName">scopeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `operatorInput`<sup>Optional</sup> <a name="operatorInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operatorInput"></a>

```java
public java.lang.String getOperatorInput();
```

- *Type:* java.lang.String

---

##### `scopeNameInput`<sup>Optional</sup> <a name="scopeNameInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeNameInput"></a>

```java
public java.lang.String getScopeNameInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `operator`<sup>Required</sup> <a name="operator" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.operator"></a>

```java
public java.lang.String getOperator();
```

- *Type:* java.lang.String

---

##### `scopeName`<sup>Required</sup> <a name="scopeName" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.scopeName"></a>

```java
public java.lang.String getScopeName();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>

---


### ResourceQuotaSpecScopeSelectorOutputReference <a name="ResourceQuotaSpecScopeSelectorOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaSpecScopeSelectorOutputReference;

new ResourceQuotaSpecScopeSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.putMatchExpression">putMatchExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resetMatchExpression">resetMatchExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatchExpression` <a name="putMatchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.putMatchExpression"></a>

```java
public void putMatchExpression(IResolvable OR java.util.List<ResourceQuotaSpecScopeSelectorMatchExpression> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.putMatchExpression.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>>

---

##### `resetMatchExpression` <a name="resetMatchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.resetMatchExpression"></a>

```java
public void resetMatchExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpression">matchExpression</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList">ResourceQuotaSpecScopeSelectorMatchExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpressionInput">matchExpressionInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchExpression`<sup>Required</sup> <a name="matchExpression" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpression"></a>

```java
public ResourceQuotaSpecScopeSelectorMatchExpressionList getMatchExpression();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpressionList">ResourceQuotaSpecScopeSelectorMatchExpressionList</a>

---

##### `matchExpressionInput`<sup>Optional</sup> <a name="matchExpressionInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.matchExpressionInput"></a>

```java
public java.lang.Object getMatchExpressionInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorMatchExpression">ResourceQuotaSpecScopeSelectorMatchExpression</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelectorOutputReference.property.internalValue"></a>

```java
public ResourceQuotaSpecScopeSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaSpecScopeSelector">ResourceQuotaSpecScopeSelector</a>

---


### ResourceQuotaTimeoutsOutputReference <a name="ResourceQuotaTimeoutsOutputReference" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.resource_quota.ResourceQuotaTimeoutsOutputReference;

new ResourceQuotaTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.resourceQuota.ResourceQuotaTimeouts">ResourceQuotaTimeouts</a>

---



