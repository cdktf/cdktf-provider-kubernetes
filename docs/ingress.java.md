# `ingress` Submodule <a name="`ingress` Submodule" id="@cdktf/provider-kubernetes.ingress"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ingress <a name="Ingress" id="@cdktf/provider-kubernetes.ingress.Ingress"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress kubernetes_ingress}.

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.Ingress;

Ingress.Builder.create(Construct scope, java.lang.String id)
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
    .metadata(IngressMetadata)
    .spec(IngressSpec)
//  .id(java.lang.String)
//  .waitForLoadBalancer(java.lang.Boolean)
//  .waitForLoadBalancer(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata">IngressMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpec">IngressSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#id Ingress#id}. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.waitForLoadBalancer">waitForLoadBalancer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata">IngressMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#metadata Ingress#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.spec"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpec">IngressSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#spec Ingress#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#id Ingress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `waitForLoadBalancer`<sup>Optional</sup> <a name="waitForLoadBalancer" id="@cdktf/provider-kubernetes.ingress.Ingress.Initializer.parameter.waitForLoadBalancer"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#wait_for_load_balancer Ingress#wait_for_load_balancer}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.putSpec">putSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.resetWaitForLoadBalancer">resetWaitForLoadBalancer</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.Ingress.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-kubernetes.ingress.Ingress.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingress.Ingress.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingress.Ingress.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-kubernetes.ingress.Ingress.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-kubernetes.ingress.Ingress.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-kubernetes.ingress.Ingress.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-kubernetes.ingress.Ingress.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-kubernetes.ingress.Ingress.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-kubernetes.ingress.Ingress.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-kubernetes.ingress.Ingress.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.ingress.Ingress.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-kubernetes.ingress.Ingress.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-kubernetes.ingress.Ingress.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.ingress.Ingress.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingress.Ingress.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.Ingress.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-kubernetes.ingress.Ingress.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.ingress.Ingress.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-kubernetes.ingress.Ingress.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-kubernetes.ingress.Ingress.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-kubernetes.ingress.Ingress.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-kubernetes.ingress.Ingress.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.ingress.Ingress.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMetadata` <a name="putMetadata" id="@cdktf/provider-kubernetes.ingress.Ingress.putMetadata"></a>

```java
public void putMetadata(IngressMetadata value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingress.Ingress.putMetadata.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata">IngressMetadata</a>

---

##### `putSpec` <a name="putSpec" id="@cdktf/provider-kubernetes.ingress.Ingress.putSpec"></a>

```java
public void putSpec(IngressSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingress.Ingress.putSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpec">IngressSpec</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-kubernetes.ingress.Ingress.resetId"></a>

```java
public void resetId()
```

##### `resetWaitForLoadBalancer` <a name="resetWaitForLoadBalancer" id="@cdktf/provider-kubernetes.ingress.Ingress.resetWaitForLoadBalancer"></a>

```java
public void resetWaitForLoadBalancer()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Ingress resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-kubernetes.ingress.Ingress.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.Ingress;

Ingress.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.ingress.Ingress.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-kubernetes.ingress.Ingress.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.Ingress;

Ingress.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.ingress.Ingress.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-kubernetes.ingress.Ingress.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.Ingress;

Ingress.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-kubernetes.ingress.Ingress.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-kubernetes.ingress.Ingress.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.Ingress;

Ingress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Ingress.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Ingress resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-kubernetes.ingress.Ingress.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-kubernetes.ingress.Ingress.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Ingress to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-kubernetes.ingress.Ingress.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Ingress that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingress.Ingress.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Ingress to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference">IngressMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference">IngressSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.status">status</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList">IngressStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.metadataInput">metadataInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata">IngressMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.specInput">specInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpec">IngressSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.waitForLoadBalancerInput">waitForLoadBalancerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.waitForLoadBalancer">waitForLoadBalancer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-kubernetes.ingress.Ingress.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-kubernetes.ingress.Ingress.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.Ingress.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-kubernetes.ingress.Ingress.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-kubernetes.ingress.Ingress.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-kubernetes.ingress.Ingress.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-kubernetes.ingress.Ingress.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.ingress.Ingress.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.ingress.Ingress.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.ingress.Ingress.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.ingress.Ingress.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.ingress.Ingress.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingress.Ingress.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.ingress.Ingress.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.ingress.Ingress.property.metadata"></a>

```java
public IngressMetadataOutputReference getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference">IngressMetadataOutputReference</a>

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.ingress.Ingress.property.spec"></a>

```java
public IngressSpecOutputReference getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference">IngressSpecOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-kubernetes.ingress.Ingress.property.status"></a>

```java
public IngressStatusList getStatus();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList">IngressStatusList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-kubernetes.ingress.Ingress.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-kubernetes.ingress.Ingress.property.metadataInput"></a>

```java
public IngressMetadata getMetadataInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata">IngressMetadata</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-kubernetes.ingress.Ingress.property.specInput"></a>

```java
public IngressSpec getSpecInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpec">IngressSpec</a>

---

##### `waitForLoadBalancerInput`<sup>Optional</sup> <a name="waitForLoadBalancerInput" id="@cdktf/provider-kubernetes.ingress.Ingress.property.waitForLoadBalancerInput"></a>

```java
public java.lang.Object getWaitForLoadBalancerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-kubernetes.ingress.Ingress.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `waitForLoadBalancer`<sup>Required</sup> <a name="waitForLoadBalancer" id="@cdktf/provider-kubernetes.ingress.Ingress.property.waitForLoadBalancer"></a>

```java
public java.lang.Object getWaitForLoadBalancer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.Ingress.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-kubernetes.ingress.Ingress.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IngressConfig <a name="IngressConfig" id="@cdktf/provider-kubernetes.ingress.IngressConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressConfig;

IngressConfig.builder()
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
    .metadata(IngressMetadata)
    .spec(IngressSpec)
//  .id(java.lang.String)
//  .waitForLoadBalancer(java.lang.Boolean)
//  .waitForLoadBalancer(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata">IngressMetadata</a></code> | metadata block. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpec">IngressSpec</a></code> | spec block. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#id Ingress#id}. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressConfig.property.waitForLoadBalancer">waitForLoadBalancer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.metadata"></a>

```java
public IngressMetadata getMetadata();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata">IngressMetadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#metadata Ingress#metadata}

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.spec"></a>

```java
public IngressSpec getSpec();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpec">IngressSpec</a>

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#spec Ingress#spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#id Ingress#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `waitForLoadBalancer`<sup>Optional</sup> <a name="waitForLoadBalancer" id="@cdktf/provider-kubernetes.ingress.IngressConfig.property.waitForLoadBalancer"></a>

```java
public java.lang.Object getWaitForLoadBalancer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Terraform will wait for the load balancer to have at least 1 endpoint before considering the resource created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#wait_for_load_balancer Ingress#wait_for_load_balancer}

---

### IngressMetadata <a name="IngressMetadata" id="@cdktf/provider-kubernetes.ingress.IngressMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressMetadata.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressMetadata;

IngressMetadata.builder()
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
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | An unstructured key value map stored with the ingress that may be used to store arbitrary metadata. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata.property.generateName">generateName</a></code> | <code>java.lang.String</code> | Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of string keys and values that can be used to organize and categorize (scope and select) the ingress. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata.property.name">name</a></code> | <code>java.lang.String</code> | Name of the ingress, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Namespace defines the space within which name of the ingress must be unique. |

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-kubernetes.ingress.IngressMetadata.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

An unstructured key value map stored with the ingress that may be used to store arbitrary metadata.

More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#annotations Ingress#annotations}

---

##### `generateName`<sup>Optional</sup> <a name="generateName" id="@cdktf/provider-kubernetes.ingress.IngressMetadata.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

Prefix, used by the server, to generate a unique name ONLY IF the `name` field has not been provided.

This value will also be combined with a unique suffix. More info: https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#idempotency

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#generate_name Ingress#generate_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-kubernetes.ingress.IngressMetadata.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of string keys and values that can be used to organize and categorize (scope and select) the ingress.

May match selectors of replication controllers and services. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#labels Ingress#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-kubernetes.ingress.IngressMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the ingress, must be unique. Cannot be updated. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#name Ingress#name}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-kubernetes.ingress.IngressMetadata.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Namespace defines the space within which name of the ingress must be unique.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#namespace Ingress#namespace}

---

### IngressSpec <a name="IngressSpec" id="@cdktf/provider-kubernetes.ingress.IngressSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressSpec.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpec;

IngressSpec.builder()
//  .backend(IngressSpecBackend)
//  .ingressClassName(java.lang.String)
//  .rule(IResolvable)
//  .rule(java.util.List<IngressSpecRule>)
//  .tls(IResolvable)
//  .tls(java.util.List<IngressSpecTls>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpec.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackend">IngressSpecBackend</a></code> | backend block. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpec.property.ingressClassName">ingressClassName</a></code> | <code>java.lang.String</code> | ingressClassName is the name of the IngressClass cluster resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpec.property.rule">rule</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule">IngressSpecRule</a>></code> | rule block. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpec.property.tls">tls</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls">IngressSpecTls</a>></code> | tls block. |

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-kubernetes.ingress.IngressSpec.property.backend"></a>

```java
public IngressSpecBackend getBackend();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackend">IngressSpecBackend</a>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#backend Ingress#backend}

---

##### `ingressClassName`<sup>Optional</sup> <a name="ingressClassName" id="@cdktf/provider-kubernetes.ingress.IngressSpec.property.ingressClassName"></a>

```java
public java.lang.String getIngressClassName();
```

- *Type:* java.lang.String

ingressClassName is the name of the IngressClass cluster resource.

The associated IngressClass defines which controller will implement the resource. This replaces the deprecated `kubernetes.io/ingress.class` annotation. For backwards compatibility, when that annotation is set, it must be given precedence over this field. The controller may emit a warning if the field and annotation have different values. Implementations of this API should ignore Ingresses without a class specified. An IngressClass resource may be marked as default, which can be used to set a default value for this field. For more information, refer to the IngressClass documentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#ingress_class_name Ingress#ingress_class_name}

---

##### `rule`<sup>Optional</sup> <a name="rule" id="@cdktf/provider-kubernetes.ingress.IngressSpec.property.rule"></a>

```java
public java.lang.Object getRule();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule">IngressSpecRule</a>>

rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#rule Ingress#rule}

---

##### `tls`<sup>Optional</sup> <a name="tls" id="@cdktf/provider-kubernetes.ingress.IngressSpec.property.tls"></a>

```java
public java.lang.Object getTls();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls">IngressSpecTls</a>>

tls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#tls Ingress#tls}

---

### IngressSpecBackend <a name="IngressSpecBackend" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecBackend;

IngressSpecBackend.builder()
//  .serviceName(java.lang.String)
//  .servicePort(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackend.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Specifies the name of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackend.property.servicePort">servicePort</a></code> | <code>java.lang.String</code> | Specifies the port of the referenced service. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackend.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Specifies the name of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#service_name Ingress#service_name}

---

##### `servicePort`<sup>Optional</sup> <a name="servicePort" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackend.property.servicePort"></a>

```java
public java.lang.String getServicePort();
```

- *Type:* java.lang.String

Specifies the port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#service_port Ingress#service_port}

---

### IngressSpecRule <a name="IngressSpecRule" id="@cdktf/provider-kubernetes.ingress.IngressSpecRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressSpecRule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRule;

IngressSpecRule.builder()
    .http(IngressSpecRuleHttp)
//  .host(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule.property.http">http</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp">IngressSpecRuleHttp</a></code> | http block. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule.property.host">host</a></code> | <code>java.lang.String</code> | host is the fully qualified domain name of a network host, as defined by RFC 3986. |

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-kubernetes.ingress.IngressSpecRule.property.http"></a>

```java
public IngressSpecRuleHttp getHttp();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp">IngressSpecRuleHttp</a>

http block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#http Ingress#http}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-kubernetes.ingress.IngressSpecRule.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

host is the fully qualified domain name of a network host, as defined by RFC 3986.

Note the following deviations from the "host" part of the URI as defined in RFC 3986: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to
the IP in the Spec of the parent Ingress.
2. The `:` delimiter is not respected because ports are not allowed.
Currently the port of an Ingress is implicitly :80 for http and
:443 for https.
Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.

host can be "precise" which is a domain name without the terminating dot of a network host (e.g. "foo.bar.com") or "wildcard", which is a domain name prefixed with a single wildcard label (e.g. "*.foo.com"). The wildcard character '*' must appear by itself as the first DNS label and matches only a single label. You cannot have a wildcard label by itself (e.g. Host == "*"). Requests will be matched against the Host field in the following way: 1. If Host is precise, the request matches this rule if the http host header is equal to Host. 2. If Host is a wildcard, then the request matches this rule if the http host header is to equal to the suffix (removing the first label) of the wildcard rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#host Ingress#host}

---

### IngressSpecRuleHttp <a name="IngressSpecRuleHttp" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRuleHttp;

IngressSpecRuleHttp.builder()
    .path(IResolvable)
    .path(java.util.List<IngressSpecRuleHttpPath>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp.property.path">path</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath">IngressSpecRuleHttpPath</a>></code> | path block. |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp.property.path"></a>

```java
public java.lang.Object getPath();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath">IngressSpecRuleHttpPath</a>>

path block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#path Ingress#path}

---

### IngressSpecRuleHttpPath <a name="IngressSpecRuleHttpPath" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRuleHttpPath;

IngressSpecRuleHttpPath.builder()
//  .backend(IngressSpecRuleHttpPathBackend)
//  .path(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend">IngressSpecRuleHttpPathBackend</a></code> | backend block. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath.property.path">path</a></code> | <code>java.lang.String</code> | path is matched against the path of an incoming request. |

---

##### `backend`<sup>Optional</sup> <a name="backend" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath.property.backend"></a>

```java
public IngressSpecRuleHttpPathBackend getBackend();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend">IngressSpecRuleHttpPathBackend</a>

backend block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#backend Ingress#backend}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

path is matched against the path of an incoming request.

Currently it can contain characters disallowed from the conventional "path" part of a URL as defined by RFC 3986. Paths must begin with a '/' and must be present when using PathType with value "Exact" or "Prefix".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#path Ingress#path}

---

### IngressSpecRuleHttpPathBackend <a name="IngressSpecRuleHttpPathBackend" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRuleHttpPathBackend;

IngressSpecRuleHttpPathBackend.builder()
//  .serviceName(java.lang.String)
//  .servicePort(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Specifies the name of the referenced service. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend.property.servicePort">servicePort</a></code> | <code>java.lang.String</code> | Specifies the port of the referenced service. |

---

##### `serviceName`<sup>Optional</sup> <a name="serviceName" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Specifies the name of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#service_name Ingress#service_name}

---

##### `servicePort`<sup>Optional</sup> <a name="servicePort" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend.property.servicePort"></a>

```java
public java.lang.String getServicePort();
```

- *Type:* java.lang.String

Specifies the port of the referenced service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#service_port Ingress#service_port}

---

### IngressSpecTls <a name="IngressSpecTls" id="@cdktf/provider-kubernetes.ingress.IngressSpecTls"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressSpecTls.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecTls;

IngressSpecTls.builder()
//  .hosts(java.util.List<java.lang.String>)
//  .secretName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | hosts is a list of hosts included in the TLS certificate. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls.property.secretName">secretName</a></code> | <code>java.lang.String</code> | secretName is the name of the secret used to terminate TLS traffic on port 443. |

---

##### `hosts`<sup>Optional</sup> <a name="hosts" id="@cdktf/provider-kubernetes.ingress.IngressSpecTls.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

hosts is a list of hosts included in the TLS certificate.

The values in this list must match the name/s used in the tlsSecret. Defaults to the wildcard host setting for the loadbalancer controller fulfilling this Ingress, if left unspecified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#hosts Ingress#hosts}

---

##### `secretName`<sup>Optional</sup> <a name="secretName" id="@cdktf/provider-kubernetes.ingress.IngressSpecTls.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

secretName is the name of the secret used to terminate TLS traffic on port 443.

Field is left optional to allow TLS routing based on SNI hostname alone. If the SNI host in a listener conflicts with the "Host" header field used by an IngressRule, the SNI host is used for termination and value of the Host header is used for routing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/kubernetes/2.37.0/docs/resources/ingress#secret_name Ingress#secret_name}

---

### IngressStatus <a name="IngressStatus" id="@cdktf/provider-kubernetes.ingress.IngressStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressStatus.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressStatus;

IngressStatus.builder()
    .build();
```


### IngressStatusLoadBalancer <a name="IngressStatusLoadBalancer" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancer.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressStatusLoadBalancer;

IngressStatusLoadBalancer.builder()
    .build();
```


### IngressStatusLoadBalancerIngress <a name="IngressStatusLoadBalancerIngress" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngress.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressStatusLoadBalancerIngress;

IngressStatusLoadBalancerIngress.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### IngressMetadataOutputReference <a name="IngressMetadataOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressMetadataOutputReference;

new IngressMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetGenerateName">resetGenerateName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetGenerateName` <a name="resetGenerateName" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetGenerateName"></a>

```java
public void resetGenerateName()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.generation">generation</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.resourceVersion">resourceVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.generateNameInput">generateNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.generateName">generateName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata">IngressMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.generation"></a>

```java
public java.lang.Number getGeneration();
```

- *Type:* java.lang.Number

---

##### `resourceVersion`<sup>Required</sup> <a name="resourceVersion" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.resourceVersion"></a>

```java
public java.lang.String getResourceVersion();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateNameInput`<sup>Optional</sup> <a name="generateNameInput" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.generateNameInput"></a>

```java
public java.lang.String getGenerateNameInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `generateName`<sup>Required</sup> <a name="generateName" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.generateName"></a>

```java
public java.lang.String getGenerateName();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressMetadataOutputReference.property.internalValue"></a>

```java
public IngressMetadata getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressMetadata">IngressMetadata</a>

---


### IngressSpecBackendOutputReference <a name="IngressSpecBackendOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecBackendOutputReference;

new IngressSpecBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.resetServicePort">resetServicePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetServicePort` <a name="resetServicePort" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.resetServicePort"></a>

```java
public void resetServicePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.servicePortInput">servicePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.servicePort">servicePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackend">IngressSpecBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `servicePortInput`<sup>Optional</sup> <a name="servicePortInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.servicePortInput"></a>

```java
public java.lang.String getServicePortInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.servicePort"></a>

```java
public java.lang.String getServicePort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference.property.internalValue"></a>

```java
public IngressSpecBackend getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackend">IngressSpecBackend</a>

---


### IngressSpecOutputReference <a name="IngressSpecOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecOutputReference;

new IngressSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.putBackend">putBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.putRule">putRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.putTls">putTls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resetIngressClassName">resetIngressClassName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resetRule">resetRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resetTls">resetTls</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackend` <a name="putBackend" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.putBackend"></a>

```java
public void putBackend(IngressSpecBackend value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.putBackend.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackend">IngressSpecBackend</a>

---

##### `putRule` <a name="putRule" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.putRule"></a>

```java
public void putRule(IResolvable OR java.util.List<IngressSpecRule> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.putRule.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule">IngressSpecRule</a>>

---

##### `putTls` <a name="putTls" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.putTls"></a>

```java
public void putTls(IResolvable OR java.util.List<IngressSpecTls> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.putTls.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls">IngressSpecTls</a>>

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetIngressClassName` <a name="resetIngressClassName" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resetIngressClassName"></a>

```java
public void resetIngressClassName()
```

##### `resetRule` <a name="resetRule" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resetRule"></a>

```java
public void resetRule()
```

##### `resetTls` <a name="resetTls" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.resetTls"></a>

```java
public void resetTls()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference">IngressSpecBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.rule">rule</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList">IngressSpecRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.tls">tls</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList">IngressSpecTlsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.backendInput">backendInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackend">IngressSpecBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.ingressClassNameInput">ingressClassNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.ruleInput">ruleInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule">IngressSpecRule</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.tlsInput">tlsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls">IngressSpecTls</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.ingressClassName">ingressClassName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpec">IngressSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.backend"></a>

```java
public IngressSpecBackendOutputReference getBackend();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackendOutputReference">IngressSpecBackendOutputReference</a>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.rule"></a>

```java
public IngressSpecRuleList getRule();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList">IngressSpecRuleList</a>

---

##### `tls`<sup>Required</sup> <a name="tls" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.tls"></a>

```java
public IngressSpecTlsList getTls();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList">IngressSpecTlsList</a>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.backendInput"></a>

```java
public IngressSpecBackend getBackendInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecBackend">IngressSpecBackend</a>

---

##### `ingressClassNameInput`<sup>Optional</sup> <a name="ingressClassNameInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.ingressClassNameInput"></a>

```java
public java.lang.String getIngressClassNameInput();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.ruleInput"></a>

```java
public java.lang.Object getRuleInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule">IngressSpecRule</a>>

---

##### `tlsInput`<sup>Optional</sup> <a name="tlsInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.tlsInput"></a>

```java
public java.lang.Object getTlsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls">IngressSpecTls</a>>

---

##### `ingressClassName`<sup>Required</sup> <a name="ingressClassName" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.ingressClassName"></a>

```java
public java.lang.String getIngressClassName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecOutputReference.property.internalValue"></a>

```java
public IngressSpec getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpec">IngressSpec</a>

---


### IngressSpecRuleHttpOutputReference <a name="IngressSpecRuleHttpOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRuleHttpOutputReference;

new IngressSpecRuleHttpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.putPath">putPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPath` <a name="putPath" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.putPath"></a>

```java
public void putPath(IResolvable OR java.util.List<IngressSpecRuleHttpPath> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.putPath.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath">IngressSpecRuleHttpPath</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.path">path</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList">IngressSpecRuleHttpPathList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.pathInput">pathInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath">IngressSpecRuleHttpPath</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp">IngressSpecRuleHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.path"></a>

```java
public IngressSpecRuleHttpPathList getPath();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList">IngressSpecRuleHttpPathList</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.pathInput"></a>

```java
public java.lang.Object getPathInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath">IngressSpecRuleHttpPath</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference.property.internalValue"></a>

```java
public IngressSpecRuleHttp getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp">IngressSpecRuleHttp</a>

---


### IngressSpecRuleHttpPathBackendOutputReference <a name="IngressSpecRuleHttpPathBackendOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference;

new IngressSpecRuleHttpPathBackendOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.resetServiceName">resetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.resetServicePort">resetServicePort</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceName` <a name="resetServiceName" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.resetServiceName"></a>

```java
public void resetServiceName()
```

##### `resetServicePort` <a name="resetServicePort" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.resetServicePort"></a>

```java
public void resetServicePort()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.servicePortInput">servicePortInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.servicePort">servicePort</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend">IngressSpecRuleHttpPathBackend</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `servicePortInput`<sup>Optional</sup> <a name="servicePortInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.servicePortInput"></a>

```java
public java.lang.String getServicePortInput();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `servicePort`<sup>Required</sup> <a name="servicePort" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.servicePort"></a>

```java
public java.lang.String getServicePort();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference.property.internalValue"></a>

```java
public IngressSpecRuleHttpPathBackend getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend">IngressSpecRuleHttpPathBackend</a>

---


### IngressSpecRuleHttpPathList <a name="IngressSpecRuleHttpPathList" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRuleHttpPathList;

new IngressSpecRuleHttpPathList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.get"></a>

```java
public IngressSpecRuleHttpPathOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath">IngressSpecRuleHttpPath</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath">IngressSpecRuleHttpPath</a>>

---


### IngressSpecRuleHttpPathOutputReference <a name="IngressSpecRuleHttpPathOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRuleHttpPathOutputReference;

new IngressSpecRuleHttpPathOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.putBackend">putBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.resetBackend">resetBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackend` <a name="putBackend" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.putBackend"></a>

```java
public void putBackend(IngressSpecRuleHttpPathBackend value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.putBackend.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend">IngressSpecRuleHttpPathBackend</a>

---

##### `resetBackend` <a name="resetBackend" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.resetBackend"></a>

```java
public void resetBackend()
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.resetPath"></a>

```java
public void resetPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.backend">backend</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference">IngressSpecRuleHttpPathBackendOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.backendInput">backendInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend">IngressSpecRuleHttpPathBackend</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath">IngressSpecRuleHttpPath</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.backend"></a>

```java
public IngressSpecRuleHttpPathBackendOutputReference getBackend();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackendOutputReference">IngressSpecRuleHttpPathBackendOutputReference</a>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.backendInput"></a>

```java
public IngressSpecRuleHttpPathBackend getBackendInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathBackend">IngressSpecRuleHttpPathBackend</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPathOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpPath">IngressSpecRuleHttpPath</a>

---


### IngressSpecRuleList <a name="IngressSpecRuleList" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRuleList;

new IngressSpecRuleList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.get"></a>

```java
public IngressSpecRuleOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule">IngressSpecRule</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule">IngressSpecRule</a>>

---


### IngressSpecRuleOutputReference <a name="IngressSpecRuleOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecRuleOutputReference;

new IngressSpecRuleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.resetHost">resetHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHttp` <a name="putHttp" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.putHttp"></a>

```java
public void putHttp(IngressSpecRuleHttp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp">IngressSpecRuleHttp</a>

---

##### `resetHost` <a name="resetHost" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.resetHost"></a>

```java
public void resetHost()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference">IngressSpecRuleHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.httpInput">httpInput</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp">IngressSpecRuleHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule">IngressSpecRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.http"></a>

```java
public IngressSpecRuleHttpOutputReference getHttp();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttpOutputReference">IngressSpecRuleHttpOutputReference</a>

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.httpInput"></a>

```java
public IngressSpecRuleHttp getHttpInput();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRuleHttp">IngressSpecRuleHttp</a>

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecRuleOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecRule">IngressSpecRule</a>

---


### IngressSpecTlsList <a name="IngressSpecTlsList" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecTlsList;

new IngressSpecTlsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.get"></a>

```java
public IngressSpecTlsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls">IngressSpecTls</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls">IngressSpecTls</a>>

---


### IngressSpecTlsOutputReference <a name="IngressSpecTlsOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressSpecTlsOutputReference;

new IngressSpecTlsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.resetHosts">resetHosts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.resetSecretName">resetSecretName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHosts` <a name="resetHosts" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.resetHosts"></a>

```java
public void resetHosts()
```

##### `resetSecretName` <a name="resetSecretName" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.resetSecretName"></a>

```java
public void resetSecretName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.hostsInput">hostsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.hosts">hosts</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls">IngressSpecTls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostsInput`<sup>Optional</sup> <a name="hostsInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.hostsInput"></a>

```java
public java.util.List<java.lang.String> getHostsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.hosts"></a>

```java
public java.util.List<java.lang.String> getHosts();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressSpecTlsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-kubernetes.ingress.IngressSpecTls">IngressSpecTls</a>

---


### IngressStatusList <a name="IngressStatusList" id="@cdktf/provider-kubernetes.ingress.IngressStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressStatusList;

new IngressStatusList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.get"></a>

```java
public IngressStatusOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IngressStatusLoadBalancerIngressList <a name="IngressStatusLoadBalancerIngressList" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressStatusLoadBalancerIngressList;

new IngressStatusLoadBalancerIngressList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.get"></a>

```java
public IngressStatusLoadBalancerIngressOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IngressStatusLoadBalancerIngressOutputReference <a name="IngressStatusLoadBalancerIngressOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference;

new IngressStatusLoadBalancerIngressOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.ip">ip</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngress">IngressStatusLoadBalancerIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.ip"></a>

```java
public java.lang.String getIp();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressOutputReference.property.internalValue"></a>

```java
public IngressStatusLoadBalancerIngress getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngress">IngressStatusLoadBalancerIngress</a>

---


### IngressStatusLoadBalancerList <a name="IngressStatusLoadBalancerList" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressStatusLoadBalancerList;

new IngressStatusLoadBalancerList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.get"></a>

```java
public IngressStatusLoadBalancerOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### IngressStatusLoadBalancerOutputReference <a name="IngressStatusLoadBalancerOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressStatusLoadBalancerOutputReference;

new IngressStatusLoadBalancerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList">IngressStatusLoadBalancerIngressList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancer">IngressStatusLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.property.ingress"></a>

```java
public IngressStatusLoadBalancerIngressList getIngress();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerIngressList">IngressStatusLoadBalancerIngressList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerOutputReference.property.internalValue"></a>

```java
public IngressStatusLoadBalancer getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancer">IngressStatusLoadBalancer</a>

---


### IngressStatusOutputReference <a name="IngressStatusOutputReference" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.kubernetes.ingress.IngressStatusOutputReference;

new IngressStatusOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList">IngressStatusLoadBalancerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-kubernetes.ingress.IngressStatus">IngressStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.property.loadBalancer"></a>

```java
public IngressStatusLoadBalancerList getLoadBalancer();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressStatusLoadBalancerList">IngressStatusLoadBalancerList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-kubernetes.ingress.IngressStatusOutputReference.property.internalValue"></a>

```java
public IngressStatus getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-kubernetes.ingress.IngressStatus">IngressStatus</a>

---



