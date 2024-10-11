# `serviceV1` Submodule <a name="`serviceV1` Submodule" id="@cdktf/provider-kubernetes.serviceV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceV1 <a name="ServiceV1" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1 kubernetes_service_v1}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1;

ServiceV1.Builder.create(Construct scope, java.lang.String id)
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
    .metadata(ServiceV1Metadata)
    .spec(ServiceV1Spec)
//  .id(java.lang.String)
//  .timeouts(ServiceV1Timeouts)
//  .waitForLoadBalancer(java.lang.Boolean)
//  .waitForLoadBalancer(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#id ServiceV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.waitForLoadBalancer">waitForLoadBalancer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#metadata ServiceV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#spec ServiceV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#id ServiceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#timeouts ServiceV1#timeouts}

---

##### `waitForLoadBalancer`<sup>Optional</sup> <a name="waitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.Initializer.parameter.waitForLoadBalancer"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#wait_for_load_balancer ServiceV1#wait_for_load_balancer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetWaitForLoadBalancer">resetWaitForLoadBalancer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata"></a>

```java
public void putMetadata(ServiceV1Metadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec"></a>

```java
public void putSpec(ServiceV1Spec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts"></a>

```java
public void putTimeouts(ServiceV1Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWaitForLoadBalancer` <a name="resetWaitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.resetWaitForLoadBalancer"></a>

```java
public void resetWaitForLoadBalancer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1;

ServiceV1.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1;

ServiceV1.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1;

ServiceV1.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1;

ServiceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ServiceV1.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ServiceV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ServiceV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ServiceV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ServiceV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference">ServiceV1MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference">ServiceV1SpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.status">status</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList">ServiceV1StatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference">ServiceV1TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancerInput">waitForLoadBalancerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancer">waitForLoadBalancer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadata"></a>

```java
public ServiceV1MetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference">ServiceV1MetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.spec"></a>

```java
public ServiceV1SpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference">ServiceV1SpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.status"></a>

```java
public ServiceV1StatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList">ServiceV1StatusList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeouts"></a>

```java
public ServiceV1TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference">ServiceV1TimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.metadataInput"></a>

```java
public ServiceV1Metadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.specInput"></a>

```java
public ServiceV1Spec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

---

##### `waitForLoadBalancerInput`<sup>Optional</sup> <a name="waitForLoadBalancerInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancerInput"></a>

```java
public java.lang.Object getWaitForLoadBalancerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `waitForLoadBalancer`<sup>Required</sup> <a name="waitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.waitForLoadBalancer"></a>

```java
public java.lang.Object getWaitForLoadBalancer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceV1Config <a name="ServiceV1Config" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1Config;

ServiceV1Config.builder()
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
    .metadata(ServiceV1Metadata)
    .spec(ServiceV1Spec)
//  .id(java.lang.String)
//  .timeouts(ServiceV1Timeouts)
//  .waitForLoadBalancer(java.lang.Boolean)
//  .waitForLoadBalancer(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#id ServiceV1#id}. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.waitForLoadBalancer">waitForLoadBalancer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.metadata"></a>

```java
public ServiceV1Metadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#metadata ServiceV1#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.spec"></a>

```java
public ServiceV1Spec getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#spec ServiceV1#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#id ServiceV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.timeouts"></a>

```java
public ServiceV1Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#timeouts ServiceV1#timeouts}

---

##### `waitForLoadBalancer`<sup>Optional</sup> <a name="waitForLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Config.property.waitForLoadBalancer"></a>

```java
public java.lang.Object getWaitForLoadBalancer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#wait_for_load_balancer ServiceV1#wait_for_load_balancer}

---

### ServiceV1Metadata <a name="ServiceV1Metadata" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1Metadata;

ServiceV1Metadata.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the service that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the service must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the service that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#annotations ServiceV1#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#generate_name ServiceV1#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the service.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#labels ServiceV1#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the service, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#name ServiceV1#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the service must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#namespace ServiceV1#namespace}

---

### ServiceV1Spec <a name="ServiceV1Spec" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1Spec;

ServiceV1Spec.builder()
//  .allocateLoadBalancerNodePorts(java.lang.Boolean)
//  .allocateLoadBalancerNodePorts(IResolvable)
//  .clusterIp(java.lang.String)
//  .clusterIps(java.util.List<java.lang.String>)
//  .externalIps(java.util.List<java.lang.String>)
//  .externalName(java.lang.String)
//  .externalTrafficPolicy(java.lang.String)
//  .healthCheckNodePort(java.lang.Number)
//  .internalTrafficPolicy(java.lang.String)
//  .ipFamilies(java.util.List<java.lang.String>)
//  .ipFamilyPolicy(java.lang.String)
//  .loadBalancerClass(java.lang.String)
//  .loadBalancerIp(java.lang.String)
//  .loadBalancerSourceRanges(java.util.List<java.lang.String>)
//  .port(IResolvable)
//  .port(java.util.List<ServiceV1SpecPort>)
//  .publishNotReadyAddresses(java.lang.Boolean)
//  .publishNotReadyAddresses(IResolvable)
//  .selector(java.util.Map<java.lang.String, java.lang.String>)
//  .sessionAffinity(java.lang.String)
//  .sessionAffinityConfig(ServiceV1SpecSessionAffinityConfig)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.allocateLoadBalancerNodePorts">allocateLoadBalancerNodePorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIp">clusterIp</a></code> | <code>java.lang.String</code> | The IP address of the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIps">clusterIps</a></code> | <code>java.util.List<java.lang.String></code> | List of IP addresses assigned to this service, and are usually assigned randomly. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalIps">externalIps</a></code> | <code>java.util.List<java.lang.String></code> | A list of IP addresses for which nodes in the cluster will also accept traffic for this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalName">externalName</a></code> | <code>java.lang.String</code> | The external reference that kubedns or equivalent will return as a CNAME record for this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalTrafficPolicy">externalTrafficPolicy</a></code> | <code>java.lang.String</code> | Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.healthCheckNodePort">healthCheckNodePort</a></code> | <code>java.lang.Number</code> | Specifies the Healthcheck NodePort for the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.internalTrafficPolicy">internalTrafficPolicy</a></code> | <code>java.lang.String</code> | Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilies">ipFamilies</a></code> | <code>java.util.List<java.lang.String></code> | IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilyPolicy">ipFamilyPolicy</a></code> | <code>java.lang.String</code> | IPFamilyPolicy represents the dual-stack-ness requested or required by this Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerClass">loadBalancerClass</a></code> | <code>java.lang.String</code> | The class of the load balancer implementation this Service belongs to. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerIp">loadBalancerIp</a></code> | <code>java.lang.String</code> | Only applies to `type = LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerSourceRanges">loadBalancerSourceRanges</a></code> | <code>java.util.List<java.lang.String></code> | If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.port">port</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>></code> | port block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.publishNotReadyAddresses">publishNotReadyAddresses</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.selector">selector</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Route service traffic to pods with label keys and values matching this selector. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinityConfig">sessionAffinityConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | session_affinity_config block. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.type">type</a></code> | <code>java.lang.String</code> | Determines how the service is exposed. |

---

##### `allocateLoadBalancerNodePorts`<sup>Optional</sup> <a name="allocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.allocateLoadBalancerNodePorts"></a>

```java
public java.lang.Object getAllocateLoadBalancerNodePorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Defines if `NodePorts` will be automatically allocated for services with type `LoadBalancer`.

It may be set to `false` if the cluster load-balancer does not rely on `NodePorts`.  If the caller requests specific `NodePorts` (by specifying a value), those requests will be respected, regardless of this field. This field may only be set for services with type `LoadBalancer`. Default is `true`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-nodeport-allocation

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#allocate_load_balancer_node_ports ServiceV1#allocate_load_balancer_node_ports}

---

##### `clusterIp`<sup>Optional</sup> <a name="clusterIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIp"></a>

```java
public java.lang.String getClusterIp();
```

- *Type:* java.lang.String

The IP address of the service.

It is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. `None` can be specified for headless services when proxying is not required. Ignored if type is `ExternalName`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#cluster_ip ServiceV1#cluster_ip}

---

##### `clusterIps`<sup>Optional</sup> <a name="clusterIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.clusterIps"></a>

```java
public java.util.List<java.lang.String> getClusterIps();
```

- *Type:* java.util.List<java.lang.String>

List of IP addresses assigned to this service, and are usually assigned randomly.

If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise creation of the service will fail. If this field is not specified, it will be initialized from the `clusterIP` field. If this field is specified, clients must ensure that `clusterIPs[0]` and `clusterIP` have the same value. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#cluster_ips ServiceV1#cluster_ips}

---

##### `externalIps`<sup>Optional</sup> <a name="externalIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalIps"></a>

```java
public java.util.List<java.lang.String> getExternalIps();
```

- *Type:* java.util.List<java.lang.String>

A list of IP addresses for which nodes in the cluster will also accept traffic for this service.

These IPs are not managed by Kubernetes. The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#external_ips ServiceV1#external_ips}

---

##### `externalName`<sup>Optional</sup> <a name="externalName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalName"></a>

```java
public java.lang.String getExternalName();
```

- *Type:* java.lang.String

The external reference that kubedns or equivalent will return as a CNAME record for this service.

No proxying will be involved. Must be a valid DNS name and requires `type` to be `ExternalName`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#external_name ServiceV1#external_name}

---

##### `externalTrafficPolicy`<sup>Optional</sup> <a name="externalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.externalTrafficPolicy"></a>

```java
public java.lang.String getExternalTrafficPolicy();
```

- *Type:* java.lang.String

Denotes if this Service desires to route external traffic to node-local or cluster-wide endpoints.

`Local` preserves the client source IP and avoids a second hop for LoadBalancer and Nodeport type services, but risks potentially imbalanced traffic spreading. `Cluster` obscures the client source IP and may cause a second hop to another node, but should have good overall load-spreading. More info: https://kubernetes.io/docs/tutorials/services/source-ip/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#external_traffic_policy ServiceV1#external_traffic_policy}

---

##### `healthCheckNodePort`<sup>Optional</sup> <a name="healthCheckNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.healthCheckNodePort"></a>

```java
public java.lang.Number getHealthCheckNodePort();
```

- *Type:* java.lang.Number

Specifies the Healthcheck NodePort for the service.

Only effects when type is set to `LoadBalancer` and external_traffic_policy is set to `Local`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#health_check_node_port ServiceV1#health_check_node_port}

---

##### `internalTrafficPolicy`<sup>Optional</sup> <a name="internalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.internalTrafficPolicy"></a>

```java
public java.lang.String getInternalTrafficPolicy();
```

- *Type:* java.lang.String

Specifies if the cluster internal traffic should be routed to all endpoints or node-local endpoints only.

`Cluster` routes internal traffic to a Service to all endpoints. `Local` routes traffic to node-local endpoints only, traffic is dropped if no node-local endpoints are ready. The default value is `Cluster`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#internal_traffic_policy ServiceV1#internal_traffic_policy}

---

##### `ipFamilies`<sup>Optional</sup> <a name="ipFamilies" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilies"></a>

```java
public java.util.List<java.lang.String> getIpFamilies();
```

- *Type:* java.util.List<java.lang.String>

IPFamilies is a list of IP families (e.g. IPv4, IPv6) assigned to this service. This field is usually assigned automatically based on cluster configuration and the ipFamilyPolicy field. If this field is specified manually, the requested family is available in the cluster, and ipFamilyPolicy allows it, it will be used; otherwise creation of the service will fail. This field is conditionally mutable: it allows for adding or removing a secondary IP family, but it does not allow changing the primary IP family of the Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#ip_families ServiceV1#ip_families}

---

##### `ipFamilyPolicy`<sup>Optional</sup> <a name="ipFamilyPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.ipFamilyPolicy"></a>

```java
public java.lang.String getIpFamilyPolicy();
```

- *Type:* java.lang.String

IPFamilyPolicy represents the dual-stack-ness requested or required by this Service.

If there is no value provided, then this field will be set to SingleStack. Services can be 'SingleStack' (a single IP family), 'PreferDualStack' (two IP families on dual-stack configured clusters or a single IP family on single-stack clusters), or 'RequireDualStack' (two IP families on dual-stack configured clusters, otherwise fail). The ipFamilies and clusterIPs fields depend on the value of this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#ip_family_policy ServiceV1#ip_family_policy}

---

##### `loadBalancerClass`<sup>Optional</sup> <a name="loadBalancerClass" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerClass"></a>

```java
public java.lang.String getLoadBalancerClass();
```

- *Type:* java.lang.String

The class of the load balancer implementation this Service belongs to.

If specified, the value of this field must be a label-style identifier, with an optional prefix. This field can only be set when the Service type is `LoadBalancer`. If not set, the default load balancer implementation is used. This field can only be set when creating or updating a Service to type `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#load-balancer-class

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#load_balancer_class ServiceV1#load_balancer_class}

---

##### `loadBalancerIp`<sup>Optional</sup> <a name="loadBalancerIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerIp"></a>

```java
public java.lang.String getLoadBalancerIp();
```

- *Type:* java.lang.String

Only applies to `type = LoadBalancer`.

LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying this field when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#load_balancer_ip ServiceV1#load_balancer_ip}

---

##### `loadBalancerSourceRanges`<sup>Optional</sup> <a name="loadBalancerSourceRanges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.loadBalancerSourceRanges"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerSourceRanges();
```

- *Type:* java.util.List<java.lang.String>

If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs.

This field will be ignored if the cloud-provider does not support the feature. More info: http://kubernetes.io/docs/user-guide/services-firewalls

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#load_balancer_source_ranges ServiceV1#load_balancer_source_ranges}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.port"></a>

```java
public java.lang.Object getPort();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>>

port block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#port ServiceV1#port}

---

##### `publishNotReadyAddresses`<sup>Optional</sup> <a name="publishNotReadyAddresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.publishNotReadyAddresses"></a>

```java
public java.lang.Object getPublishNotReadyAddresses();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When set to true, indicates that DNS implementations must publish the `notReadyAddresses` of subsets for the Endpoints associated with the Service.

The default value is `false`. The primary use case for setting this field is to use a StatefulSet's Headless Service to propagate `SRV` records for its Pods without respect to their readiness for purpose of peer discovery.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#publish_not_ready_addresses ServiceV1#publish_not_ready_addresses}

---

##### `selector`<sup>Optional</sup> <a name="selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.selector"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSelector();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Route service traffic to pods with label keys and values matching this selector.

Only applies to types `ClusterIP`, `NodePort`, and `LoadBalancer`. More info: https://kubernetes.io/docs/concepts/services-networking/service/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#selector ServiceV1#selector}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

Used to maintain session affinity. Supports `ClientIP` and `None`. Defaults to `None`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#virtual-ips-and-service-proxies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#session_affinity ServiceV1#session_affinity}

---

##### `sessionAffinityConfig`<sup>Optional</sup> <a name="sessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.sessionAffinityConfig"></a>

```java
public ServiceV1SpecSessionAffinityConfig getSessionAffinityConfig();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

session_affinity_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#session_affinity_config ServiceV1#session_affinity_config}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Determines how the service is exposed.

Defaults to `ClusterIP`. Valid options are `ExternalName`, `ClusterIP`, `NodePort`, and `LoadBalancer`. `ExternalName` maps to the specified `external_name`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#publishing-services-service-types

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#type ServiceV1#type}

---

### ServiceV1SpecPort <a name="ServiceV1SpecPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1SpecPort;

ServiceV1SpecPort.builder()
    .port(java.lang.Number)
//  .appProtocol(java.lang.String)
//  .name(java.lang.String)
//  .nodePort(java.lang.Number)
//  .protocol(java.lang.String)
//  .targetPort(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.port">port</a></code> | <code>java.lang.Number</code> | The port that will be exposed by this service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | The application protocol for this port. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.name">name</a></code> | <code>java.lang.String</code> | The name of this port within the service. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.nodePort">nodePort</a></code> | <code>java.lang.Number</code> | The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.protocol">protocol</a></code> | <code>java.lang.String</code> | The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.targetPort">targetPort</a></code> | <code>java.lang.String</code> | Number or name of the port to access on the pods targeted by the service. |

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

The port that will be exposed by this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#port ServiceV1#port}

---

##### `appProtocol`<sup>Optional</sup> <a name="appProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.appProtocol"></a>

```java
public java.lang.String getAppProtocol();
```

- *Type:* java.lang.String

The application protocol for this port.

This field follows standard Kubernetes label syntax. Un-prefixed names are reserved for IANA standard service names (as per RFC-6335 and http://www.iana.org/assignments/service-names). Non-standard protocols should use prefixed names such as mycompany.com/my-custom-protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#app_protocol ServiceV1#app_protocol}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of this port within the service.

All ports within the service must have unique names. Optional if only one ServicePort is defined on this service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#name ServiceV1#name}

---

##### `nodePort`<sup>Optional</sup> <a name="nodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.nodePort"></a>

```java
public java.lang.Number getNodePort();
```

- *Type:* java.lang.Number

The port on each node on which this service is exposed when `type` is `NodePort` or `LoadBalancer`.

Usually assigned by the system. If specified, it will be allocated to the service if unused or else creation of the service will fail. Default is to auto-allocate a port if the `type` of this service requires one. More info: https://kubernetes.io/docs/concepts/services-networking/service/#type-nodeport

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#node_port ServiceV1#node_port}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

The IP protocol for this port. Supports `TCP` and `UDP`. Default is `TCP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#protocol ServiceV1#protocol}

---

##### `targetPort`<sup>Optional</sup> <a name="targetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort.property.targetPort"></a>

```java
public java.lang.String getTargetPort();
```

- *Type:* java.lang.String

Number or name of the port to access on the pods targeted by the service.

Number must be in the range 1 to 65535. This field is ignored for services with `cluster_ip = "None"`. More info: https://kubernetes.io/docs/concepts/services-networking/service/#defining-a-service

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#target_port ServiceV1#target_port}

---

### ServiceV1SpecSessionAffinityConfig <a name="ServiceV1SpecSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1SpecSessionAffinityConfig;

ServiceV1SpecSessionAffinityConfig.builder()
//  .clientIp(ServiceV1SpecSessionAffinityConfigClientIp)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.property.clientIp">clientIp</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | client_ip block. |

---

##### `clientIp`<sup>Optional</sup> <a name="clientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig.property.clientIp"></a>

```java
public ServiceV1SpecSessionAffinityConfigClientIp getClientIp();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

client_ip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#client_ip ServiceV1#client_ip}

---

### ServiceV1SpecSessionAffinityConfigClientIp <a name="ServiceV1SpecSessionAffinityConfigClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1SpecSessionAffinityConfigClientIp;

ServiceV1SpecSessionAffinityConfigClientIp.builder()
//  .timeoutSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | Specifies the seconds of `ClientIP` type session sticky time. |

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

Specifies the seconds of `ClientIP` type session sticky time.

The value must be > 0 and <= 86400(for 1 day) if `ServiceAffinity` == `ClientIP`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#timeout_seconds ServiceV1#timeout_seconds}

---

### ServiceV1Status <a name="ServiceV1Status" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Status"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Status.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1Status;

ServiceV1Status.builder()
    .build();
```


### ServiceV1StatusLoadBalancer <a name="ServiceV1StatusLoadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1StatusLoadBalancer;

ServiceV1StatusLoadBalancer.builder()
    .build();
```


### ServiceV1StatusLoadBalancerIngress <a name="ServiceV1StatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1StatusLoadBalancerIngress;

ServiceV1StatusLoadBalancerIngress.builder()
    .build();
```


### ServiceV1Timeouts <a name="ServiceV1Timeouts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1Timeouts;

ServiceV1Timeouts.builder()
//  .create(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#create ServiceV1#create}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.33.0/docs/resources/service_v1#create ServiceV1#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServiceV1MetadataOutputReference <a name="ServiceV1MetadataOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1MetadataOutputReference;

new ServiceV1MetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1MetadataOutputReference.property.internalValue"></a>

```java
public ServiceV1Metadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Metadata">ServiceV1Metadata</a>

---


### ServiceV1SpecOutputReference <a name="ServiceV1SpecOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1SpecOutputReference;

new ServiceV1SpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort">putPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig">putSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetAllocateLoadBalancerNodePorts">resetAllocateLoadBalancerNodePorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIp">resetClusterIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIps">resetClusterIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalIps">resetExternalIps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalName">resetExternalName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalTrafficPolicy">resetExternalTrafficPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetHealthCheckNodePort">resetHealthCheckNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetInternalTrafficPolicy">resetInternalTrafficPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilies">resetIpFamilies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilyPolicy">resetIpFamilyPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerClass">resetLoadBalancerClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerIp">resetLoadBalancerIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerSourceRanges">resetLoadBalancerSourceRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPublishNotReadyAddresses">resetPublishNotReadyAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSelector">resetSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinityConfig">resetSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPort` <a name="putPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort"></a>

```java
public void putPort(IResolvable OR java.util.List<ServiceV1SpecPort> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putPort.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>>

---

##### `putSessionAffinityConfig` <a name="putSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig"></a>

```java
public void putSessionAffinityConfig(ServiceV1SpecSessionAffinityConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.putSessionAffinityConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---

##### `resetAllocateLoadBalancerNodePorts` <a name="resetAllocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetAllocateLoadBalancerNodePorts"></a>

```java
public void resetAllocateLoadBalancerNodePorts()
```

##### `resetClusterIp` <a name="resetClusterIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIp"></a>

```java
public void resetClusterIp()
```

##### `resetClusterIps` <a name="resetClusterIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetClusterIps"></a>

```java
public void resetClusterIps()
```

##### `resetExternalIps` <a name="resetExternalIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalIps"></a>

```java
public void resetExternalIps()
```

##### `resetExternalName` <a name="resetExternalName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalName"></a>

```java
public void resetExternalName()
```

##### `resetExternalTrafficPolicy` <a name="resetExternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetExternalTrafficPolicy"></a>

```java
public void resetExternalTrafficPolicy()
```

##### `resetHealthCheckNodePort` <a name="resetHealthCheckNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetHealthCheckNodePort"></a>

```java
public void resetHealthCheckNodePort()
```

##### `resetInternalTrafficPolicy` <a name="resetInternalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetInternalTrafficPolicy"></a>

```java
public void resetInternalTrafficPolicy()
```

##### `resetIpFamilies` <a name="resetIpFamilies" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilies"></a>

```java
public void resetIpFamilies()
```

##### `resetIpFamilyPolicy` <a name="resetIpFamilyPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetIpFamilyPolicy"></a>

```java
public void resetIpFamilyPolicy()
```

##### `resetLoadBalancerClass` <a name="resetLoadBalancerClass" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerClass"></a>

```java
public void resetLoadBalancerClass()
```

##### `resetLoadBalancerIp` <a name="resetLoadBalancerIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerIp"></a>

```java
public void resetLoadBalancerIp()
```

##### `resetLoadBalancerSourceRanges` <a name="resetLoadBalancerSourceRanges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetLoadBalancerSourceRanges"></a>

```java
public void resetLoadBalancerSourceRanges()
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetPublishNotReadyAddresses` <a name="resetPublishNotReadyAddresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetPublishNotReadyAddresses"></a>

```java
public void resetPublishNotReadyAddresses()
```

##### `resetSelector` <a name="resetSelector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSelector"></a>

```java
public void resetSelector()
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinity"></a>

```java
public void resetSessionAffinity()
```

##### `resetSessionAffinityConfig` <a name="resetSessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetSessionAffinityConfig"></a>

```java
public void resetSessionAffinityConfig()
```

##### `resetType` <a name="resetType" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.port">port</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList">ServiceV1SpecPortList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfig">sessionAffinityConfig</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference">ServiceV1SpecSessionAffinityConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePortsInput">allocateLoadBalancerNodePortsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpInput">clusterIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpsInput">clusterIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIpsInput">externalIpsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalNameInput">externalNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicyInput">externalTrafficPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePortInput">healthCheckNodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicyInput">internalTrafficPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamiliesInput">ipFamiliesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicyInput">ipFamilyPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClassInput">loadBalancerClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIpInput">loadBalancerIpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRangesInput">loadBalancerSourceRangesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.portInput">portInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddressesInput">publishNotReadyAddressesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selectorInput">selectorInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfigInput">sessionAffinityConfigInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePorts">allocateLoadBalancerNodePorts</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIp">clusterIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIps">clusterIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIps">externalIps</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalName">externalName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicy">externalTrafficPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePort">healthCheckNodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicy">internalTrafficPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilies">ipFamilies</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicy">ipFamilyPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClass">loadBalancerClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIp">loadBalancerIp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRanges">loadBalancerSourceRanges</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddresses">publishNotReadyAddresses</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selector">selector</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.port"></a>

```java
public ServiceV1SpecPortList getPort();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList">ServiceV1SpecPortList</a>

---

##### `sessionAffinityConfig`<sup>Required</sup> <a name="sessionAffinityConfig" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfig"></a>

```java
public ServiceV1SpecSessionAffinityConfigOutputReference getSessionAffinityConfig();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference">ServiceV1SpecSessionAffinityConfigOutputReference</a>

---

##### `allocateLoadBalancerNodePortsInput`<sup>Optional</sup> <a name="allocateLoadBalancerNodePortsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePortsInput"></a>

```java
public java.lang.Object getAllocateLoadBalancerNodePortsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIpInput`<sup>Optional</sup> <a name="clusterIpInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpInput"></a>

```java
public java.lang.String getClusterIpInput();
```

- *Type:* java.lang.String

---

##### `clusterIpsInput`<sup>Optional</sup> <a name="clusterIpsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIpsInput"></a>

```java
public java.util.List<java.lang.String> getClusterIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalIpsInput`<sup>Optional</sup> <a name="externalIpsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIpsInput"></a>

```java
public java.util.List<java.lang.String> getExternalIpsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalNameInput`<sup>Optional</sup> <a name="externalNameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalNameInput"></a>

```java
public java.lang.String getExternalNameInput();
```

- *Type:* java.lang.String

---

##### `externalTrafficPolicyInput`<sup>Optional</sup> <a name="externalTrafficPolicyInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicyInput"></a>

```java
public java.lang.String getExternalTrafficPolicyInput();
```

- *Type:* java.lang.String

---

##### `healthCheckNodePortInput`<sup>Optional</sup> <a name="healthCheckNodePortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePortInput"></a>

```java
public java.lang.Number getHealthCheckNodePortInput();
```

- *Type:* java.lang.Number

---

##### `internalTrafficPolicyInput`<sup>Optional</sup> <a name="internalTrafficPolicyInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicyInput"></a>

```java
public java.lang.String getInternalTrafficPolicyInput();
```

- *Type:* java.lang.String

---

##### `ipFamiliesInput`<sup>Optional</sup> <a name="ipFamiliesInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamiliesInput"></a>

```java
public java.util.List<java.lang.String> getIpFamiliesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipFamilyPolicyInput`<sup>Optional</sup> <a name="ipFamilyPolicyInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicyInput"></a>

```java
public java.lang.String getIpFamilyPolicyInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerClassInput`<sup>Optional</sup> <a name="loadBalancerClassInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClassInput"></a>

```java
public java.lang.String getLoadBalancerClassInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerIpInput`<sup>Optional</sup> <a name="loadBalancerIpInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIpInput"></a>

```java
public java.lang.String getLoadBalancerIpInput();
```

- *Type:* java.lang.String

---

##### `loadBalancerSourceRangesInput`<sup>Optional</sup> <a name="loadBalancerSourceRangesInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRangesInput"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerSourceRangesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.portInput"></a>

```java
public java.lang.Object getPortInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>>

---

##### `publishNotReadyAddressesInput`<sup>Optional</sup> <a name="publishNotReadyAddressesInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddressesInput"></a>

```java
public java.lang.Object getPublishNotReadyAddressesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `selectorInput`<sup>Optional</sup> <a name="selectorInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selectorInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSelectorInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sessionAffinityConfigInput`<sup>Optional</sup> <a name="sessionAffinityConfigInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityConfigInput"></a>

```java
public ServiceV1SpecSessionAffinityConfig getSessionAffinityConfigInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinityInput"></a>

```java
public java.lang.String getSessionAffinityInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `allocateLoadBalancerNodePorts`<sup>Required</sup> <a name="allocateLoadBalancerNodePorts" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.allocateLoadBalancerNodePorts"></a>

```java
public java.lang.Object getAllocateLoadBalancerNodePorts();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clusterIp`<sup>Required</sup> <a name="clusterIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIp"></a>

```java
public java.lang.String getClusterIp();
```

- *Type:* java.lang.String

---

##### `clusterIps`<sup>Required</sup> <a name="clusterIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.clusterIps"></a>

```java
public java.util.List<java.lang.String> getClusterIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalIps`<sup>Required</sup> <a name="externalIps" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalIps"></a>

```java
public java.util.List<java.lang.String> getExternalIps();
```

- *Type:* java.util.List<java.lang.String>

---

##### `externalName`<sup>Required</sup> <a name="externalName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalName"></a>

```java
public java.lang.String getExternalName();
```

- *Type:* java.lang.String

---

##### `externalTrafficPolicy`<sup>Required</sup> <a name="externalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.externalTrafficPolicy"></a>

```java
public java.lang.String getExternalTrafficPolicy();
```

- *Type:* java.lang.String

---

##### `healthCheckNodePort`<sup>Required</sup> <a name="healthCheckNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.healthCheckNodePort"></a>

```java
public java.lang.Number getHealthCheckNodePort();
```

- *Type:* java.lang.Number

---

##### `internalTrafficPolicy`<sup>Required</sup> <a name="internalTrafficPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalTrafficPolicy"></a>

```java
public java.lang.String getInternalTrafficPolicy();
```

- *Type:* java.lang.String

---

##### `ipFamilies`<sup>Required</sup> <a name="ipFamilies" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilies"></a>

```java
public java.util.List<java.lang.String> getIpFamilies();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ipFamilyPolicy`<sup>Required</sup> <a name="ipFamilyPolicy" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.ipFamilyPolicy"></a>

```java
public java.lang.String getIpFamilyPolicy();
```

- *Type:* java.lang.String

---

##### `loadBalancerClass`<sup>Required</sup> <a name="loadBalancerClass" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerClass"></a>

```java
public java.lang.String getLoadBalancerClass();
```

- *Type:* java.lang.String

---

##### `loadBalancerIp`<sup>Required</sup> <a name="loadBalancerIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerIp"></a>

```java
public java.lang.String getLoadBalancerIp();
```

- *Type:* java.lang.String

---

##### `loadBalancerSourceRanges`<sup>Required</sup> <a name="loadBalancerSourceRanges" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.loadBalancerSourceRanges"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerSourceRanges();
```

- *Type:* java.util.List<java.lang.String>

---

##### `publishNotReadyAddresses`<sup>Required</sup> <a name="publishNotReadyAddresses" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.publishNotReadyAddresses"></a>

```java
public java.lang.Object getPublishNotReadyAddresses();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `selector`<sup>Required</sup> <a name="selector" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.selector"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSelector();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.sessionAffinity"></a>

```java
public java.lang.String getSessionAffinity();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecOutputReference.property.internalValue"></a>

```java
public ServiceV1Spec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Spec">ServiceV1Spec</a>

---


### ServiceV1SpecPortList <a name="ServiceV1SpecPortList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1SpecPortList;

new ServiceV1SpecPortList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get"></a>

```java
public ServiceV1SpecPortOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>>

---


### ServiceV1SpecPortOutputReference <a name="ServiceV1SpecPortOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1SpecPortOutputReference;

new ServiceV1SpecPortOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetAppProtocol">resetAppProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetNodePort">resetNodePort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetTargetPort">resetTargetPort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppProtocol` <a name="resetAppProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetAppProtocol"></a>

```java
public void resetAppProtocol()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNodePort` <a name="resetNodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetNodePort"></a>

```java
public void resetNodePort()
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetTargetPort` <a name="resetTargetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.resetTargetPort"></a>

```java
public void resetTargetPort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocolInput">appProtocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePortInput">nodePortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPortInput">targetPortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocol">appProtocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePort">nodePort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPort">targetPort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `appProtocolInput`<sup>Optional</sup> <a name="appProtocolInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocolInput"></a>

```java
public java.lang.String getAppProtocolInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nodePortInput`<sup>Optional</sup> <a name="nodePortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePortInput"></a>

```java
public java.lang.Number getNodePortInput();
```

- *Type:* java.lang.Number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `targetPortInput`<sup>Optional</sup> <a name="targetPortInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPortInput"></a>

```java
public java.lang.String getTargetPortInput();
```

- *Type:* java.lang.String

---

##### `appProtocol`<sup>Required</sup> <a name="appProtocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.appProtocol"></a>

```java
public java.lang.String getAppProtocol();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodePort`<sup>Required</sup> <a name="nodePort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.nodePort"></a>

```java
public java.lang.Number getNodePort();
```

- *Type:* java.lang.Number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `targetPort`<sup>Required</sup> <a name="targetPort" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.targetPort"></a>

```java
public java.lang.String getTargetPort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPortOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecPort">ServiceV1SpecPort</a>

---


### ServiceV1SpecSessionAffinityConfigClientIpOutputReference <a name="ServiceV1SpecSessionAffinityConfigClientIpOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference;

new ServiceV1SpecSessionAffinityConfigClientIpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.resetTimeoutSeconds"></a>

```java
public void resetTimeoutSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSecondsInput"></a>

```java
public java.lang.Number getTimeoutSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.timeoutSeconds"></a>

```java
public java.lang.Number getTimeoutSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference.property.internalValue"></a>

```java
public ServiceV1SpecSessionAffinityConfigClientIp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---


### ServiceV1SpecSessionAffinityConfigOutputReference <a name="ServiceV1SpecSessionAffinityConfigOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1SpecSessionAffinityConfigOutputReference;

new ServiceV1SpecSessionAffinityConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp">putClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resetClientIp">resetClientIp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putClientIp` <a name="putClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp"></a>

```java
public void putClientIp(ServiceV1SpecSessionAffinityConfigClientIp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.putClientIp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---

##### `resetClientIp` <a name="resetClientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.resetClientIp"></a>

```java
public void resetClientIp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIp">clientIp</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference">ServiceV1SpecSessionAffinityConfigClientIpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIpInput">clientIpInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIp`<sup>Required</sup> <a name="clientIp" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIp"></a>

```java
public ServiceV1SpecSessionAffinityConfigClientIpOutputReference getClientIp();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIpOutputReference">ServiceV1SpecSessionAffinityConfigClientIpOutputReference</a>

---

##### `clientIpInput`<sup>Optional</sup> <a name="clientIpInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.clientIpInput"></a>

```java
public ServiceV1SpecSessionAffinityConfigClientIp getClientIpInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigClientIp">ServiceV1SpecSessionAffinityConfigClientIp</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfigOutputReference.property.internalValue"></a>

```java
public ServiceV1SpecSessionAffinityConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1SpecSessionAffinityConfig">ServiceV1SpecSessionAffinityConfig</a>

---


### ServiceV1StatusList <a name="ServiceV1StatusList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1StatusList;

new ServiceV1StatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get"></a>

```java
public ServiceV1StatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ServiceV1StatusLoadBalancerIngressList <a name="ServiceV1StatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1StatusLoadBalancerIngressList;

new ServiceV1StatusLoadBalancerIngressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get"></a>

```java
public ServiceV1StatusLoadBalancerIngressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ServiceV1StatusLoadBalancerIngressOutputReference <a name="ServiceV1StatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1StatusLoadBalancerIngressOutputReference;

new ServiceV1StatusLoadBalancerIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress">ServiceV1StatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```java
public ServiceV1StatusLoadBalancerIngress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngress">ServiceV1StatusLoadBalancerIngress</a>

---


### ServiceV1StatusLoadBalancerList <a name="ServiceV1StatusLoadBalancerList" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1StatusLoadBalancerList;

new ServiceV1StatusLoadBalancerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get"></a>

```java
public ServiceV1StatusLoadBalancerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ServiceV1StatusLoadBalancerOutputReference <a name="ServiceV1StatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1StatusLoadBalancerOutputReference;

new ServiceV1StatusLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList">ServiceV1StatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer">ServiceV1StatusLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.ingress"></a>

```java
public ServiceV1StatusLoadBalancerIngressList getIngress();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerIngressList">ServiceV1StatusLoadBalancerIngressList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerOutputReference.property.internalValue"></a>

```java
public ServiceV1StatusLoadBalancer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancer">ServiceV1StatusLoadBalancer</a>

---


### ServiceV1StatusOutputReference <a name="ServiceV1StatusOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1StatusOutputReference;

new ServiceV1StatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList">ServiceV1StatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Status">ServiceV1Status</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.loadBalancer"></a>

```java
public ServiceV1StatusLoadBalancerList getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusLoadBalancerList">ServiceV1StatusLoadBalancerList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1StatusOutputReference.property.internalValue"></a>

```java
public ServiceV1Status getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Status">ServiceV1Status</a>

---


### ServiceV1TimeoutsOutputReference <a name="ServiceV1TimeoutsOutputReference" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.service_v1.ServiceV1TimeoutsOutputReference;

new ServiceV1TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.serviceV1.ServiceV1TimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.serviceV1.ServiceV1Timeouts">ServiceV1Timeouts</a>

---



